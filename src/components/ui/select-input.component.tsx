import {
  makeStyles,
  Paper,
  PaperProps,
  Select,
  SelectProps,
  StandardTextFieldProps,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import React from "react";
import { YELLOW } from "../../constant/color.constant";
import { RoundPaperComponent } from "./round-paper.component";

export interface SelectInputProps extends StandardTextFieldProps {}

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0.5, 1, 0.5, 1),
  },
  textField: {
    borderRadius: "5px",
    width: "100%",
  },
}));

export const SelectInputComponent: React.FC<SelectInputProps> = (props) => {
  const classes = useStyle();
  const { className, children, select, ...rest } = props;

  return (
    <RoundPaperComponent className={classes.container + " " + className}>
      <TextField select className={classes.textField} {...rest}>
        {children}
      </TextField>
    </RoundPaperComponent>
  );
};
