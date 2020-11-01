import React from "react";
import firebase from "firebase";

import {
  Avatar,
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";

import { YELLOW } from "../constant/color.constant";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut, signIn } from "../components/service/firebase.service";
import { User } from "../models/user.model";

interface Link {
  label: string;
  requireLogin: boolean;
  href?: string;
}

const links: Link[] = [
  { label: "Upload File", requireLogin: true, href: "/upload" },
  { label: "Manage your file", requireLogin: true },
  { label: "", requireLogin: true },
  { label: "Rules and policies", requireLogin: false },
  { label: "About", requireLogin: false },
  { label: "", requireLogin: true },
  { label: "Edit your personal data", requireLogin: true },
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

  const [user, loading, error] = useAuthState(firebase.auth()) as [
    User | null,
    boolean,
    any
  ];

  const content = () => (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin={theme.spacing(4, 0, 4, 0)}
      >
        {user ? (
          <>
            <Avatar className={classes.avatar} src={user?.photoURL}>
              A
            </Avatar>
            <Typography variant="h1" align="center">
              {user?.displayName}
            </Typography>
          </>
        ) : (
          <Button variant="contained" color="secondary" onClick={signIn}>
            Sign In
          </Button>
        )}
      </Box>

      <Box
        display="grid"
        gridTemplateRows={`repeat(${links.length}, 1fr)`}
        justifyContent="start"
      >
        {links.map(
          ({ label, requireLogin, href }) =>
            (!requireLogin || user) && (
              <a href={href} className={classes.link}>
                <Typography variant="h6" id={label}>
                  {label}
                </Typography>
              </a>
            )
        )}
        {user && (
          <a className={classes.link} onClick={signOut}>
            <Typography variant="h6">Sign out</Typography>
          </a>
        )}
      </Box>
    </>
  );

  return (
    <div className={classes.root}>
      <Container className={classes.cardContainer}>
        {loading || error || content()}
      </Container>
    </div>
  );
};
