import { createStore, Store, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* States */
import { LoginState } from './login/types';
import { StockState } from './stocks/types';

/* Reducers */
import login from './login';
import stocks from './stocks';

export interface ApplicationState {
  login: LoginState,
  stocks: StockState
}

const reducers = combineReducers({
  login,
  stocks
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store: Store<ApplicationState> = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
