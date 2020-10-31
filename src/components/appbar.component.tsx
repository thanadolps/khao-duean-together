import {
  AppBar,
  Avatar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { MenuButtonComponent } from "./ui/menu-button.component";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "max-content 1fr max-content",
    alignItems: "center",
    padding: theme.spacing(0, 1, 0, 0),
  },
}));

export const AppbarComponent = () => {
  const classes = useStyle();

  return (
    <AppBar position="static">
      <div className={classes.container}>
        <MenuButtonComponent />
        <Typography align="center">เข้าเดือน Together</Typography>
        <Avatar />
      </div>
    </AppBar>
  );
};
