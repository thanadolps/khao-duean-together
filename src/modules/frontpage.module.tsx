import { Card, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { SheetCardComponent } from "../components/sheet-card.component";

const useStyle = makeStyles({
  root: {
    backgroundColor: "#A9A9A9",
    minHeight: "100vh",
  },
});

export const FrontPageModule = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h1" align="center">
          เข้าเดือน Together
        </Typography>

        <SheetCardComponent
          sheet={{
            title: "แคลพี่ตูน",
            view: 5000,
            tags: ["ปี 1", "ภาครวม", "แคลคูลัส", "ก่อนมิดเทอม"],
            imageSrc: "https://picsum.photos/200",
            dataSrc: "",
          }}
        ></SheetCardComponent>
      </Container>
    </div>
  );
};
