import {
  AppBar,
  Avatar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "max-content 1fr max-content",
  },
});

export const AppbarComponent = () => {
  const classes = useStyle();

  return (
    <AppBar position="static">
      <Toolbar className={classes.container}>
        <Button color="inherit">Menu</Button>
        <Typography align="center">เข้าเดือน Together</Typography>
        <Avatar />
      </Toolbar>
    </AppBar>
  );
};
