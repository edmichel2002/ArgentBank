// store.js
// rootReducer.js
import { combineReducers, createStore } from '@reduxjs/toolkit';
import authReducer from '../Reduce/authReducer';
import profilReducer from '../Reduce/profilReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  profil: profilReducer
});

const store = createStore(rootReducer)

export default store;
