import React from "react";
import firebase from "firebase";

import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  FormHelperText,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";

import { SheetCardComponent } from "../components/sheet-card.component";
import { YELLOW } from "../constant/color.constant";
import { Major, Year, Subject } from "../models/tag.model";
import { useAuthState } from "react-firebase-hooks/auth";

const links = [
  "Upload File",
  "Manage your file",
  "",
  "Rules and policies",
  "About",
  "",
  "Edit your personal data",
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
  link: {
    width: "max-content",
    cursor: "pointer",
  },
}));

export const MenuModule = () => {
  const classes = useStyle();
  const theme = useTheme();

  const [user, loading, error] = useAuthState(firebase.auth());

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
          <Typography variant="h1">{JSON.stringify(user)}</Typography>
        </Box>

        <Box
          display="grid"
          gridTemplateRows={`repeat(${links.length}, 1fr)`}
          justifyContent="start"
        >
          {links.map((i) => (
            <a href="aaa" className={classes.link}>
              <Typography variant="h6" id={i}>
                {i}
              </Typography>
            </a>
          ))}
          <a className={classes.link}>
            <Typography variant="h6">
              {user ? "Sign out" : "Sign In"}
            </Typography>
          </a>
        </Box>
      </Container>
    </div>
  );
};
