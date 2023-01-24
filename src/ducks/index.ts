import {configureStore} from '@reduxjs/toolkit';
import reducers from './reducers';

const config = () => {
  const store = configureStore({
    reducer: reducers(),
  });
  return store;
};

export default config;
