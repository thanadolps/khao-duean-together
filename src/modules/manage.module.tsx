import { Container, makeStyles } from "@material-ui/core";
import React from "react";

import { SheetCardComponent } from "../components/sheet-card.component";
import {
  useCollectionData,
  useCollectionDataOnce,
} from "react-firebase-hooks/firestore";
import {
  sheetCollection,
  useSheets,
} from "../components/service/sheet.service";
import { SheetModel } from "../models/sheet.model";
import { useAuth } from "../components/service/firebase.service";

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

export const ManageModule = () => {
  const classes = useStyle();

  const [user] = useAuth();

  const [sheets] = useCollectionData<SheetModel>(
    user ? sheetCollection().where("uploaderId", "==", user?.uid) : undefined
  );
  return (
    <div className={classes.root}>
      <Container className={classes.cardContainer}>
        {sheets?.map((sheet) => <SheetCardComponent sheet={sheet} />) ?? ""}
      </Container>
    </div>
  );
};
