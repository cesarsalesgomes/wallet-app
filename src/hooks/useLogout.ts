import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Constants from '../constants';

import { loadSuccess } from '../store/login/actions';

const useLogout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = useCallback(() => {
    try {
      dispatch(loadSuccess(null));

      history.push(Constants.LOGIN_ROUTE);
    } catch (error) {
      toast.error(Constants.ERROR_LOGOUT);
    }
  }, [dispatch, history]);

  return logout;
};

export default useLogout;
