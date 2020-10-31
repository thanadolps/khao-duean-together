import React from "react";
import ReactDOM from "react-dom";
import { AppModule } from "./modules/app.module";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

import "./styles/index.css";
import { firebaseConfig } from "./constant/firebase-config.constant";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <AppModule />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
