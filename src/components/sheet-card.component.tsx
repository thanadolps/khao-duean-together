import {
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { SheetModel } from "../models/sheet.model";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: theme.breakpoints.width("sm"),
    display: "flex",
  },
  image: {
    width: "200px",
    height: "200px",
  },
}));

export const SheetCardComponent: React.FC<{ sheet: SheetModel }> = (props) => {
  const classes = useStyle();

  return (
    <Card className={classes.root}>
      <CardMedia image={props.sheet.imageSrc} className={classes.image} />
      <CardContent>
        <Typography variant="h4">{props.sheet.title}</Typography>
        <Typography color="textSecondary">
          <i>{props.sheet.view} view</i>
        </Typography>
        <Button color="primary" variant="contained">
          <Typography variant="h4">OPEN</Typography>
        </Button>
      </CardContent>
    </Card>
  );
};
