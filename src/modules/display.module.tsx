import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { compareTwoStrings } from "string-similarity";

import { SheetCardComponent } from "../components/sheet-card.component";

import { sheetCollection } from "../components/service/sheet.service";
import {
  useCollectionData,
  useCollectionDataOnce,
} from "react-firebase-hooks/firestore";
import { useLocation } from "react-router-dom";
import { SheetModel } from "../models/sheet.model";
import { BadgeComponent } from "../components/ui/badge.component";
import { TextInputComponent } from "../components/ui/text-input.component";

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

  const [searchText, setSearchText] = useState("");

  const [sheets] = useCollectionData<SheetModel>(collection, {
    idField: "id",
  });
  const sortedSheet = sheets
    ?.map((sheet) => ({
      val: sheet,
      similarity: compareTwoStrings(searchText, sheet.title),
    }))
    .sort((a, b) => b.similarity - a.similarity);

  return (
    <div className={classes.root}>
      <Container className={classes.cardContainer}>
        <Box display="flex" margin="16px 0 8px 0">
          {[params.get("year"), params.get("subject"), params.get("major")]
            .filter((x) => x)
            .map((x) => (
              <BadgeComponent>{x}</BadgeComponent>
            ))}
        </Box>

        <Box>
          <TextInputComponent
            label="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></TextInputComponent>
        </Box>

        {sheets ? (
          sortedSheet?.map((sheet) => (
            <SheetCardComponent sheet={sheet.val} />
          )) ?? ""
        ) : (
          <Typography variant="h2"></Typography>
        )}
      </Container>
    </div>
  );
};
