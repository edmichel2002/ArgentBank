// store.js
// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../authSlice';
import profilReducer from '../profilSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  profil: profilReducer,
});

export default rootReducer;
