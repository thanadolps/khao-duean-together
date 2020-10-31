import { makeStyles, Paper, PaperProps } from "@material-ui/core";
import React from "react";

export interface RoundPaperProps extends PaperProps {}

const useStyle = makeStyles({
  roundPaper: {
    borderRadius: "16px",
  },
});

export const RoundPaperComponent: React.FC<RoundPaperProps> = (props) => {
  const classes = useStyle();
  const { className, ...rest } = props;

  return (
    <Paper className={classes.roundPaper + " " + className} {...rest}>
      {props.children}
    </Paper>
  );
};
