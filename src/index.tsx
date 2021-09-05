import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CyclePoints from "./components/CyclePoints";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/cyclePoints">
            <CyclePoints />
          </Route>
          <Route>404 not Found!</Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
