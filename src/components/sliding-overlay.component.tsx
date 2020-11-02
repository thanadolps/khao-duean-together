import {
  AppBar,
  Avatar,
  Box,
  Button,
  Hidden,
  makeStyles,
  Slide,
  SlideProps,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { DARK_PURPLE } from "../constant/color.constant";
import { MenuButtonComponent } from "./ui/menu-button.component";

export interface SlidingOverlayProps extends SlideProps {
  overlay: React.ReactElement<any, any>;
}

const useStyle = makeStyles((theme) => ({
  root: {
    display: "grid",
  },
  overlap: {
    gridColumn: "1 / -1",
    gridRow: "1 / -1",
  },
  overlay: {
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
}));

export const SlidingOverlayComponent: React.FC<SlidingOverlayProps> = (
  props
) => {
  const classes = useStyle(props);
  const { children, overlay, ...rest } = props;

  return (
    <div className={classes.root}>
      <Box hidden={props.in} className={classes.overlap}>
        {props.children}
      </Box>
      <Slide {...rest}>
        <div className={`${classes.overlap} ${classes.overlay}`}>{overlay}</div>
      </Slide>
    </div>
  );
};
