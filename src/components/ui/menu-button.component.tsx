import {
  Button,
  ButtonProps,
  makeStyles,
  Paper,
  PaperProps,
  Theme,
} from "@material-ui/core";
import React, { HTMLAttributes } from "react";
import { DARK_PURPLE, YELLOW } from "../../constant/color.constant";

export interface MenuButtonProps extends ButtonProps {
  inverseColor?: boolean;
}
const useStyle = makeStyles<Theme, MenuButtonProps>((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  container: {
    width: "60px",
    height: "60px",
    borderRadius: "0",
    backgroundColor: (props) => (props.inverseColor ? DARK_PURPLE : YELLOW),
  },
  menuIconRow: {
    borderRadius: "3px",
    width: "33px",
    height: "7px",
    backgroundColor: (props) => (props.inverseColor ? YELLOW : DARK_PURPLE),
  },
}));

export const MenuButtonComponent: React.FC<MenuButtonProps> = (props) => {
  const classes = useStyle(props);
  const { className, inverseColor, ...rest } = props;

  const iconRow = <div className={`${classes.menuIconRow}`} />;

  return (
    <Button
      className={`${classes.container} ${className}`}
      classes={{ label: `${classes.root}` }}
      {...rest}
    >
      {iconRow}
      {iconRow}
      {iconRow}
    </Button>
  );
};
