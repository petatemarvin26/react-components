import {combineReducers} from '@reduxjs/toolkit';

import user from './user';

const reducers = () => {
  return combineReducers({
    user,
  });
};

export default reducers;
