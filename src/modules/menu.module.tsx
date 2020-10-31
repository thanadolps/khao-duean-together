import {
  Avatar,
  Box,
  Card,
  Container,
  FormHelperText,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { SheetCardComponent } from "../components/sheet-card.component";
import { YELLOW } from "../constant/color.constant";
import { Major, Year, Subject } from "../models/tag.model";

const links = [
  "Upload File",
  "Manage your file",
  "",
  "Rules and policies",
  "About",
  "",
  "Edit your personal data",
  "Sign out",
];

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: YELLOW,
    minHeight: "100vh",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: `${theme.spacing(1)}px`,
  },
  avatar: {
    width: "50%",
    height: "50%",
  },
}));

export const MenuModule = () => {
  const classes = useStyle();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Container className={classes.cardContainer}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          margin={theme.spacing(4, 0, 4, 0)}
        >
          <Avatar className={classes.avatar} src="https://picsum.photos/100">
            A
          </Avatar>
          <Typography variant="h1">NAME</Typography>
        </Box>

        <Box display="grid" gridTemplateRows={`repeat(${links.length}, 1fr)`}>
          {links.map((i) => (
            <Typography variant="h6" id={i}>
              {i}
            </Typography>
          ))}
        </Box>
      </Container>
    </div>
  );
};
