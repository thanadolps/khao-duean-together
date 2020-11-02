import {
  Box,
  Button,
  Card,
  Container,
  FormHelperText,
  makeStyles,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import firebase from "firebase";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { RoundPaperComponent } from "../components/ui/round-paper.component";
import { SelectInputComponent } from "../components/ui/select-input.component";
import { PURPLE } from "../constant/color.constant";
import { TagGroups } from "../models/tag.model";
import { useForm } from "react-hook-form";
import { uploadSheet } from "../components/service/sheet.service";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from "../components/service/firebase.service";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: PURPLE,
    minHeight: "100vh",
    overflow: "hidden",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: `${theme.spacing(1)}px`,
  },
  plusBtn: {
    width: "67px",
    height: "67px",
    fontSize: "4.5rem",
    border: "2px solid black",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadDescriptionContainer: {
    display: "grid",
    gridTemplateColumns: "min-content 1fr",
    gap: "10px",
    alignItems: "center",
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(3, 0, 2, 0),
  },
  uploadButton: {
    margin: theme.spacing(3, 0, 0, 0),
    width: "200px",
    height: "48px",
  },
}));

export const UploadModule = () => {
  const classes = useStyle();
  const [user] = useAuth();

  const [tagsInfo, loading, error] = useDocumentDataOnce<TagGroups>(
    firebase.firestore().doc("const/tag")
  );

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    errors,
    reset,
  } = useForm();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedFile = watch("file") as File | undefined;

  const [snackBar, setSnackBar] = useState(false);

  useEffect(() => {
    register({
      name: "file",
    });
  }, [register]);

  function onSubmit(data: any) {
    const { major, subject, year, ...rest } = data;
    const sheetUpload = {
      tags: {
        major,
        subject,
        year,
      },
      ...rest,
    };

    uploadSheet(sheetUpload).then(() => {
      reset();
      setSnackBar(true);
    });
  }

  function onFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.item(0);
    setValue("file", file, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }

  return (
    <div className={classes.root}>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="uploaderId"
            value={user?.uid}
            hidden
            ref={register}
          ></input>
          <RoundPaperComponent className={classes.uploadDescriptionContainer}>
            <input
              type="file"
              ref={fileInputRef}
              hidden
              onChange={onFileInput}
              required
            ></input>
            <Button
              className={classes.plusBtn}
              onClick={() => fileInputRef.current?.click()}
            >
              +
            </Button>
            <div>
              <Typography variant="h2">
                <b>{selectedFile ? selectedFile.name : "Upload File"}</b>
              </Typography>
              <Typography>
                <i>Only .jpeg, .png or .pdf </i>
              </Typography>
            </div>
          </RoundPaperComponent>

          <RoundPaperComponent className="column-paper">
            <TextField
              placeholder="title"
              variant="outlined"
              name="title"
              required
              inputRef={register}
            />

            <RoundPaperComponent className="column-paper dark-purple ">
              <SelectInputComponent
                select
                name="year"
                label="Select year"
                required
                inputRef={register}
                control={control}
                defaultValue={""}
              >
                {tagsInfo?.year.map((i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </SelectInputComponent>
              <SelectInputComponent
                name="major"
                label="Select major"
                required
                inputRef={register}
                control={control}
                defaultValue={""}
              >
                {tagsInfo?.major.map((i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </SelectInputComponent>
              <SelectInputComponent
                name="subject"
                label="Select subject"
                required
                inputRef={register}
                control={control}
                defaultValue={""}
              >
                {tagsInfo?.subject.map((i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </SelectInputComponent>
            </RoundPaperComponent>

            <RoundPaperComponent></RoundPaperComponent>
          </RoundPaperComponent>

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="secondary"
              className={classes.uploadButton}
              type="submit"
            >
              <Typography variant="h3">Upload</Typography>
            </Button>
          </Box>
        </form>
      </Container>

      <Snackbar
        message="File Uploaded"
        autoHideDuration={5000}
        onClose={() => setSnackBar(false)}
        open={snackBar}
      ></Snackbar>
    </div>
  );
};
