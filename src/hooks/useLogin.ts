import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Constants from '../constants';

import { loadRequest, loadSuccess, loadFailure } from '../store/login/actions';

const useLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const login = useCallback(async (username: string, password: string) => {
    dispatch(loadRequest());

    try {
      const token = (await axios.post<{ token: string }>(`${process.env.REACT_APP_WALLET_API}${Constants.API_LOGIN_ROUTE}`, { username, password }))?.data?.token;

      dispatch(loadSuccess(token));

      history.push(Constants.DASHBOARD_ROUTE);
    } catch (error) {
      dispatch(loadFailure());
      toast.error(Constants.ERROR_LOGIN);
    }
  }, [dispatch, history]);

  return login;
};

export default useLogin;
