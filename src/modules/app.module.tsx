import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../styles/theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DisplayModule } from "./display.module";
import { NotFoundModule } from "./not-found.module";
import { AppbarComponent } from "../components/appbar.component";
import { UploadModule } from "./upload.module";
import { FrontPageModule } from "./frontpage.module";

export const AppModule = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppbarComponent />
      <Router>
        <Switch>
          <Route path="/upload">
            <UploadModule />
          </Route>
          <Route path="/display">
            <DisplayModule />
          </Route>
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
