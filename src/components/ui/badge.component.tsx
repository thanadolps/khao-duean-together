import { makeStyles, Paper, PaperProps } from "@material-ui/core";
import React from "react";
import { YELLOW } from "../../constant/color.constant";

export interface BadgeProps extends PaperProps {}

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: YELLOW,
    display: "inline-block",
    padding: theme.spacing(0.5, 1, 0.5, 1),
    borderRadius: "5px",
  },
}));

export const BadgeComponent: React.FC<BadgeProps> = (props) => {
  const classes = useStyle();
  const { className, ...rest } = props;

  return (
    <Paper className={classes.root + " " + className} {...rest}>
      {props.children}
    </Paper>
  );
};
