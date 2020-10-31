import {
  Button,
  ButtonProps,
  makeStyles,
  Paper,
  PaperProps,
} from "@material-ui/core";
import React, { HTMLAttributes } from "react";
import { DARK_PURPLE, YELLOW } from "../../constant/color.constant";

export interface MenuButtonProps extends ButtonProps {}
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  container: {
    width: "60px",
    height: "60px",
  },
  menuIconRow: {
    borderRadius: "3px",
    width: "33px",
    height: "7px",
  },
  yellow: {
    backgroundColor: YELLOW,
  },
  purple: {
    backgroundColor: DARK_PURPLE,
  },
}));

export const MenuButtonComponent: React.FC<MenuButtonProps> = (props) => {
  const classes = useStyle();
  const { className, ...rest } = props;

  const iconRow = (
    <div className={`${classes.menuIconRow} ${classes.purple}`} />
  );

  return (
    <Button
      className={`${classes.yellow} ${classes.container} ${className}`}
      classes={{ label: `${classes.root}` }}
      {...rest}
    >
      {iconRow}
      {iconRow}
      {iconRow}
    </Button>
  );
};
