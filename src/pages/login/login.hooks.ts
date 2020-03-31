import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

import { loadRequest, loadSuccess, loadFailure } from '../../store/login/actions';
import { Login } from '../../store/login/types';
import Constants from '../../constants';

const useLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const login = useCallback(async (username: string, password: string) => {
    dispatch(loadRequest());

    try {
      const data = (await axios.post<Login>(`${process.env.REACT_APP_WALLET_API}${Constants.API_LOGIN_ROUTE}`, { username, password }))?.data;

      dispatch(loadSuccess(data));

      history.push(Constants.DASHBOARD_ROUTE);
    } catch (error) {
      dispatch(loadFailure());
      toast.error(Constants.ERROR_LOGIN);
    }
  }, [dispatch, history]);

  return login;
};

export default useLogin;
