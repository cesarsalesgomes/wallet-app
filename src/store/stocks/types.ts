import { StockType } from '../../enums/stocks.enum';

/**
 * Action types
 */
export enum StockTypes {
  LOAD_REQUEST = '@stocks/LOAD_REQUEST',
  LOAD_SUCCESS = '@stocks/LOAD_SUCCESS',
  LOAD_FAILURE = '@stocks/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Stock {
  symbol: string;
  name: string;
  value: number;
  quantity: number;
  type: StockType
}

/**
 * State type
 */
export interface StockState {
  readonly data: Stock[] | null;
  readonly loading: boolean;
  readonly error: boolean;
}
