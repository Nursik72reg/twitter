import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { theme } from "./theme";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
