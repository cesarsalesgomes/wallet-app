import { action } from 'typesafe-actions';
import { StockTypes, Stock } from './types';

export const loadRequest = () => action(StockTypes.LOAD_REQUEST);

export const loadSuccess = (data: Stock[] | null) => action(StockTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(StockTypes.LOAD_FAILURE);
