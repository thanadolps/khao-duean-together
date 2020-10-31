import {
  Box,
  Button,
  Chip,
  makeStyles,
  Paper,
  PaperProps,
  Typography,
} from "@material-ui/core";
import React from "react";
import { SheetModel } from "../models/sheet.model";
import { RoundPaperComponent } from "./ui/round-paper.component";

export interface SheetCardProps extends PaperProps {
  sheet: SheetModel;
}

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: theme.breakpoints.width("sm"),
    padding: theme.spacing(2),
  },
  title: {
    lineHeight: "45px",
  },
  imageContainer: { maxHeight: "100%" },
  image: {
    maxHeight: "100%",
  },
  chip: {
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    width: "fit-content",
    color: theme.palette.primary.contrastText,
    display: "inline-block",
    padding: theme.spacing(0, 1, 0, 1),
  },
  downloadBtn: {
    backgroundColor: "#D7A3B9",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "end",
    gap: `${theme.spacing(2)}px`,
  },
}));

export const SheetCardComponent: React.FC<SheetCardProps> = (props) => {
  const classes = useStyle();
  const { sheet, className, ...rest } = props;

  return (
    <RoundPaperComponent className={classes.root + " " + className} {...rest}>
      <Typography variant="h3" className={classes.title}>
        <b>{sheet.title}</b>
      </Typography>

      <div>
        {[sheet.tags.major, sheet.tags.subject, sheet.tags.year].map((tag) => (
          <Paper color="primary" className={classes.chip}>
            {tag}
          </Paper>
        ))}
      </div>

      <Typography color="textSecondary">
        <i>{sheet.view} view</i>
      </Typography>

      <Box className={classes.buttonContainer}>
        <Button color="secondary" variant="contained">
          <Typography variant="h3">OPEN</Typography>
        </Button>

        <Button
          color="secondary"
          variant="contained"
          className={classes.downloadBtn}
        >
          <Typography variant="body2">Download</Typography>
        </Button>
      </Box>
    </RoundPaperComponent>
  );
};
