import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../styles/theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DisplayModule } from "./display.module";
import { NotFoundModule } from "./not-found.module";
import { AppbarComponent } from "../components/appbar.component";
import { UploadModule } from "./upload.module";
import { FrontPageModule } from "./frontpage.module";
import { MenuModule } from "./menu.module";

import { SlidingOverlayComponent } from "../components/sliding-overlay.component";

export const AppModule = () => {
  const [overlayActive, setOverlayActive] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router>
          <AppbarComponent
            onMenuClick={() => setOverlayActive(!overlayActive)}
            onTitleClick={() => setOverlayActive(false)}
            inverseColor={overlayActive}
          />
          <SlidingOverlayComponent
            in={overlayActive}
            overlay={<MenuModule />}
            direction="right"
          >
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
          </SlidingOverlayComponent>
        </Router>
      </React.Suspense>
    </ThemeProvider>
  );
};
