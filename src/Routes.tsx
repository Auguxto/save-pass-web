import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import Login from "./pages/Login";
import Register from "./pages/Register";
import App from "./pages/App";

import { UserProvider } from "./contexts/UserContext";

import client from "./api/graphql";

const Routes = () => {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/app" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
};

export default Routes;
