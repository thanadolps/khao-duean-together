import { Container, makeStyles } from "@material-ui/core";
import React from "react";

import { SheetCardComponent } from "../components/sheet-card.component";

import { useSheets } from "../components/service/sheet.service";

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

export const DisplayModule = () => {
  const classes = useStyle();

  const [sheets] = useSheets();

  return (
    <div className={classes.root}>
      <Container className={classes.cardContainer}>
        {sheets?.map((sheet) => <SheetCardComponent sheet={sheet} />) ?? ""}
      </Container>
    </div>
  );
};
