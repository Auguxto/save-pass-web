import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import App from "./pages/App";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/app" component={App} />
      </Switch>
    </Router>
  );
};

export default Routes;
