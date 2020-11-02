import { Container, makeStyles, Snackbar } from "@material-ui/core";
import React, { useState } from "react";

import { SheetCardComponent } from "../components/sheet-card.component";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { sheetCollection } from "../components/service/sheet.service";
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
    user ? sheetCollection().where("uploaderId", "==", user?.uid) : undefined,
    { idField: "id" }
  );
  return (
    <div className={classes.root}>
      <Container className={classes.cardContainer}>
        {sheets?.map((sheet) => (
          <SheetCardComponent sheet={sheet} uid={user?.uid} />
        )) ?? ""}
      </Container>
    </div>
  );
};
