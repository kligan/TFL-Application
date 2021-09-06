import Trains from "./containers/Trains/Trains";
import "./App.css";
import CyclePoints from "./containers/Cycles/CyclePoints";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Trains />
        </Route>
        <Route path="/cyclePoints">
          <CyclePoints />
        </Route>
        <Route>404 not Found!</Route>
      </Switch>
    </Router>
  );
}

export default App;
