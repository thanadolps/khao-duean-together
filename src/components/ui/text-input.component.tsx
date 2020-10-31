import {
  makeStyles,
  Paper,
  PaperProps,
  StandardTextFieldProps,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import React from "react";
import { YELLOW } from "../../constant/color.constant";
import { RoundPaperComponent } from "./round-paper.component";

export interface TextInputProps extends StandardTextFieldProps {}

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0.5, 1, 0.5, 1),
  },
  textField: {
    borderRadius: "5px",
    width: "100%",
  },
}));

export const TextInputComponent: React.FC<TextInputProps> = (props) => {
  const classes = useStyle();
  const { className, ...rest } = props;

  return (
    <RoundPaperComponent className={classes.container + " " + className}>
      <TextField className={classes.textField} {...rest} />
    </RoundPaperComponent>
  );
};
