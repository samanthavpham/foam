import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Unclassified from "./Unclassified.jsx";
import Classified from "./Classified.jsx";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Unclassified</Link>
          </li>
          <li>
            <Link to="/classified/foaming">Foaming</Link>
          </li>
          <li>
            <Link to="/classified/notfoaming">Not Foaming</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Unclassified />
          </Route>
          <Route path="/classified/foaming">
            <Classified classification={"Foaming"} />
          </Route>
          <Route path="/classified/notfoaming">
            <Classified classification={"NotFoaming"} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
