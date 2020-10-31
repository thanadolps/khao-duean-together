import {
  AppBar,
  Avatar,
  Button,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { DARK_PURPLE, YELLOW } from "../constant/color.constant";
import { MenuButtonComponent } from "./ui/menu-button.component";

export interface AppbarProps {
  onclick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  inverseColor?: boolean;
}

const useStyle = makeStyles<Theme, AppbarProps>((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "max-content 1fr max-content",
    alignItems: "center",
    padding: theme.spacing(0, 1, 0, 0),
  },
  appBar: {
    backgroundColor: (props) => (props.inverseColor ? YELLOW : DARK_PURPLE),
  },
}));

export const AppbarComponent: React.FC<AppbarProps> = (props) => {
  const classes = useStyle(props);
  const { onclick, inverseColor } = props;

  return (
    <AppBar position="static" className={classes.appBar}>
      <div className={classes.container}>
        <MenuButtonComponent onClick={onclick} inverseColor={inverseColor} />
        <Typography align="center">เข้าเดือน Together</Typography>
        <Avatar />
      </div>
    </AppBar>
  );
};
