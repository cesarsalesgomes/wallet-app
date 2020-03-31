import React from 'react';
import {
  AppBar, Toolbar, Typography, Button
} from '@material-ui/core';
import navbarStyles from './navbar.style';
import useLogout from './navbar.hooks';

const Navbar: React.FC = () => {
  const classes = navbarStyles();

  /**
   * Logout Hook
   */
  const logout = useLogout();
  const logoutOnClick = (e: React.FormEvent) => {
    e.preventDefault();
    logout();
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="textPrimary">
          Stocks
        </Typography>
        <Button onClick={logoutOnClick}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
