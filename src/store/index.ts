import { createStore, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { LoginState } from './login/types';

/**
 * Reducers
 */
import loginReducer from './login';

// export interface ApplicationState {
//   login: LoginState
// }

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, loginReducer);

const store: Store<LoginState> = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
