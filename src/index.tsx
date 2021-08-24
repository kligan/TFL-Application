import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CyclePoints from "./components/CyclePoints";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/cyclePoints">
          <CyclePoints />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
