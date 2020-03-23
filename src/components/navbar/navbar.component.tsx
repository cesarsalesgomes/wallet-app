import React from 'react';
import {
  AppBar, Toolbar, Typography, Button
} from '@material-ui/core';
import navbarStyles from './navbar.style';
import useLogout from '../../hooks/useLogout';

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
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Dashboard
        </Typography>
        <Button color="inherit" onClick={logoutOnClick}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
