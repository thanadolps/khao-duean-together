import {
  Box,
  Button,
  Card,
  Container,
  FormHelperText,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";
import firebase from "firebase";
import { Link, useHistory } from "react-router-dom";
import { BadgeComponent } from "../components/ui/badge.component";
import { RoundPaperComponent } from "../components/ui/round-paper.component";
import { SelectInputComponent } from "../components/ui/select-input.component";
import { TextInputComponent } from "../components/ui/text-input.component";
import { PURPLE } from "../constant/color.constant";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { TagGroups, Tags } from "../models/tag.model";
import { useForm } from "react-hook-form";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: PURPLE,
    minHeight: "100vh",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1, 1, 1, 1),
    gap: `${theme.spacing(2)}px`,
  },
}));

export const FrontPageModule = () => {
  const classes = useStyle();
  const theme = useTheme();
  const history = useHistory();

  const [tagsInfo, loading, error] = useDocumentDataOnce<TagGroups>(
    firebase.firestore().doc("const/tag")
  );

  const { register, handleSubmit, control, watch, errors } = useForm();

  function onSubmit(data: any) {
    let query = [];

    if (data.subject) {
      query.push(`subject=${data.subject}`);
    }

    if (data.major) {
      query.push(`major=${data.major}`);
    }

    if (data.year) {
      query.push(`year=${data.year}`);
    }

    history.push(`/display?${query.join("&")}`);
  }

  return (
    <div className={classes.root}>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box padding={theme.spacing(3, 0, 2, 0)}>
            {/*  <Box margin={theme.spacing(0, 0, 1, 0)}>
            <BadgeComponent>Search by name</BadgeComponent>
          </Box>
          <RoundPaperComponent>
            <div className={classes.paper}>
              <TextInputComponent label="File Name" className="ember" />
              <Link to="display">
                <Button variant="contained" color="secondary">
                  Search
                </Button>
              </Link>
            </div>
          </RoundPaperComponent>
        */}
          </Box>

          <Box>
            <Box margin={theme.spacing(0, 0, 1, 0)}>
              <BadgeComponent>Search by filter</BadgeComponent>
            </Box>
            <RoundPaperComponent>
              <div className={classes.paper}>
                <SelectInputComponent
                  label="Select year"
                  name="year"
                  className="ember"
                  control={control}
                  defaultValue=""
                >
                  <MenuItem key="" value="">
                    -
                  </MenuItem>
                  {tagsInfo?.year.map((i) => (
                    <MenuItem key={i} value={i}>
                      {i}
                    </MenuItem>
                  ))}
                </SelectInputComponent>
                <SelectInputComponent
                  name="major"
                  label="Select major"
                  className="ember"
                  control={control}
                  defaultValue=""
                >
                  <MenuItem key="" value="">
                    -
                  </MenuItem>
                  {tagsInfo?.major.map((i) => (
                    <MenuItem key={i} value={i}>
                      {i}
                    </MenuItem>
                  ))}
                </SelectInputComponent>
                <SelectInputComponent
                  label="Select subject"
                  name="subject"
                  className="ember"
                  control={control}
                  defaultValue=""
                >
                  <MenuItem key="" value="">
                    -
                  </MenuItem>
                  {tagsInfo?.subject.map((i) => (
                    <MenuItem key={i} value={i}>
                      {i}
                    </MenuItem>
                  ))}
                </SelectInputComponent>

                <Button variant="contained" color="secondary" type="submit">
                  Search
                </Button>
              </div>
            </RoundPaperComponent>
          </Box>
        </form>
      </Container>
    </div>
  );
};
