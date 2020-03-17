import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";

const PrivateRoute = ({ component: Component, path, ...rest }: { component: any, path: string }) => {
  const isAuthenticated = useAuthentication();

  return (
    <Route
      {...rest}
      render={
        props => isAuthenticated() ? (
          <Component path={path} {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
      }
    />
  )
}

export default PrivateRoute;