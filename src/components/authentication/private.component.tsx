/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Navbar from '../navbar/navbar.component';
import useAuthentication from './private.hooks';

const PrivateRoute = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { component: Component, path, ...rest }: { component: any, path: string }
) => {
  const isAuthenticated = useAuthentication();

  return (
    <Route
      {...rest}
      render={
        (props) => (isAuthenticated() ? (
          <Container maxWidth="lg">
            <Navbar />
            <Component path={path} {...props} />
          </Container>
        ) : (
            <Redirect to={{
              pathname: '/',
              state: { from: props.location }
            }}
            />
          ))
      }
    />
  );
};

export default PrivateRoute;
