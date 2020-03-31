import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import loginStyles from './login.style';
import useLogin from './login.hooks';
import { ApplicationState } from '../../store';

const Login: React.FC = () => {
  const classes = loginStyles();
  const { loading } = useSelector((state: ApplicationState) => state?.login);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  /**
   * Login Hook
   */
  const login = useLogin();
  const loginOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <Container maxWidth="sm">
      <form className={classes.form} noValidate onSubmit={loginOnSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={loading} fullWidth variant="contained" className={classes.submit}>
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default Login;
