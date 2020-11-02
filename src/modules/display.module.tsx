import { Badge, Box, Container, makeStyles } from "@material-ui/core";
import React from "react";

import { SheetCardComponent } from "../components/sheet-card.component";

import {
  sheetCollection,
  useSheets,
} from "../components/service/sheet.service";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useLocation, useParams } from "react-router-dom";
import { SheetModel } from "../models/sheet.model";
import { BadgeComponent } from "../components/ui/badge.component";

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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const DisplayModule = () => {
  const classes = useStyle();
  const params = useQuery();

  let collection = sheetCollection();
  params.forEach((v, k) => {
    collection = collection.where(`tags.${k}`, "==", v) as any;
  });
  console.log(collection);

  const [sheets] = useCollectionData<SheetModel>(collection);

  return (
    <div className={classes.root}>
      <Container className={classes.cardContainer}>
        <Box display="flex" margin="16px">
          {[params.get("year"), params.get("subject"), params.get("major")]
            .filter((x) => x)
            .map((x) => (
              <BadgeComponent>{x}</BadgeComponent>
            ))}
        </Box>

        {sheets?.map((sheet) => <SheetCardComponent sheet={sheet} />) ?? ""}
      </Container>
    </div>
  );
};
