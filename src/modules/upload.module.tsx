import {
  Card,
  Container,
  FormHelperText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { RoundPaperComponent } from "../components/ui/round-paper.component";
import { PURPLE } from "../constant/color.constant";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: PURPLE,
    minHeight: "100vh",
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
  uploadInfoContainer: {},
}));

export const UploadModule = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Container>
        <RoundPaperComponent className={classes.uploadDescriptionContainer}>
          <div className={classes.plusBtn}>
            <span>+</span>
          </div>
          <div>
            <Typography variant="h2">
              <b>Upload File</b>
            </Typography>
            <Typography>
              <i>Only .jpeg, .png or .pdf </i>
            </Typography>
          </div>
        </RoundPaperComponent>

        <RoundPaperComponent className={classes.uploadInfoContainer}>
          <textarea></textarea>

          <RoundPaperComponent></RoundPaperComponent>
        </RoundPaperComponent>
      </Container>
    </div>
  );
};
