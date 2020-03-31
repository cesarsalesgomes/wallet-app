import { Reducer } from 'redux';
import { StockState, StockTypes } from './types';

const INITIAL_STATE: StockState = {
  data: null,
  loading: false,
  error: false
};

const reducer: Reducer<StockState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StockTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case StockTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload
      };
    case StockTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: null
      };
    default:
      return state;
  }
};

export default reducer;
