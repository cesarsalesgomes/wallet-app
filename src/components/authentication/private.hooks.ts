import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ApplicationState } from '../../store';

const useAuthentication = () => {
  const token = useSelector((state: ApplicationState) => state.login?.data?.token);

  const login = useCallback((): boolean => {
    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));

    return (payload.exp * 1000) > Date.now();
  }, [token]);

  return login;
};

export default useAuthentication;
