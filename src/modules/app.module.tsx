import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../styles/theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { FrontPageModule } from "./frontpage.module";
import { NotFoundModule } from "./not-found.module";

export const AppModule = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <FrontPageModule />
          </Route>
          <Route>
            <NotFoundModule />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
