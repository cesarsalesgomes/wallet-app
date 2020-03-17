import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/login/login.component";
import Dashboard from "./pages/dashboard/dashboard";
import Constants from "./constants";
import PrivateRoute from "./components/authentication/private.component";

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <PrivateRoute path={Constants.DASHBOARD_ROUTE} component={Dashboard}></PrivateRoute>
    </Switch>
  );
};

export default MainRoutes;
