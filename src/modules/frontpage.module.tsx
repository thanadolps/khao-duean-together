import {
  Card,
  Container,
  FormHelperText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { SheetCardComponent } from "../components/sheet-card.component";
import { Major, Year, Subject } from "../models/tag.model";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#8E728D",
    minHeight: "100vh",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: `${theme.spacing(1)}px`,
  },
}));

export const FrontPageModule = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Container className={classes.cardContainer}>
        <SheetCardComponent
          sheet={{
            title: "แคลพี่ตูน",
            view: 5000,
            tags: {
              year: Year.Y1,
              major: Major.General,
              subject: Subject.CalI,
            },
            dataSrc: "",
          }}
        />

        <SheetCardComponent
          sheet={{
            title: "แคลพี่ตูน",
            view: 5000,
            tags: {
              year: Year.Y1,
              major: Major.General,
              subject: Subject.CalI,
            },
            dataSrc: "",
          }}
        />
      </Container>
    </div>
  );
};
