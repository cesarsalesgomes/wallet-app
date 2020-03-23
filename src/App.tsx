import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import store, { persistor } from './store';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes />
      </Router>
    </PersistGate>
    <ToastContainer />
  </Provider>
);

export default App;
