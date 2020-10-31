import {
  Box,
  Button,
  Card,
  Container,
  FormHelperText,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { BadgeComponent } from "../components/ui/badge.component";
import { RoundPaperComponent } from "../components/ui/round-paper.component";
import { SelectInputComponent } from "../components/ui/select-input.component";
import { TextInputComponent } from "../components/ui/text-input.component";
import { PURPLE } from "../constant/color.constant";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: PURPLE,
    minHeight: "100vh",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1, 1, 1, 1),
    gap: `${theme.spacing(2)}px`,
  },
}));

export const FrontPageModule = () => {
  const classes = useStyle();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Container>
        <Box padding={theme.spacing(3, 0, 2, 0)}>
          <Box margin={theme.spacing(0, 0, 1, 0)}>
            <BadgeComponent>Search by name</BadgeComponent>
          </Box>
          <RoundPaperComponent>
            <div className={classes.paper}>
              <TextInputComponent label="File Name" className="yellow" />
              <Button variant="contained" color="secondary">
                Search
              </Button>
            </div>
          </RoundPaperComponent>
        </Box>

        <Box>
          <Box margin={theme.spacing(0, 0, 1, 0)}>
            <BadgeComponent>Search by filter</BadgeComponent>
          </Box>
          <RoundPaperComponent>
            <div className={classes.paper}>
              <SelectInputComponent label="Select year" className="yellow">
                <MenuItem>A</MenuItem>
                <MenuItem>B</MenuItem>
                <MenuItem>C</MenuItem>
              </SelectInputComponent>
              <SelectInputComponent label="Select major" className="yellow" />
              <SelectInputComponent label="Select subject" className="yellow" />
              <Button variant="contained" color="secondary">
                Search
              </Button>
            </div>
          </RoundPaperComponent>
        </Box>
      </Container>
    </div>
  );
};
