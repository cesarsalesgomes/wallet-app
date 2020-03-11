import { action } from 'typesafe-actions';
import { LoginTypes } from './types';

export const loadRequest = () => action(LoginTypes.LOAD_REQUEST);

export const loadSuccess = (data: string) => action(LoginTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(LoginTypes.LOAD_FAILURE);
