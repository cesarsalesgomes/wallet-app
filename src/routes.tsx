import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/login/login.component";
import Dashboard from "./pages/dashboard/dashboard";
import Constants from "./constants";

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path={Constants.DASHBOARD_ROUTE} component={Dashboard}></Route>
    </Switch>
  );
};

export default MainRoutes;
