import { combineReducers } from 'redux';
import authReducer from './authReducer';
import newsReducer from './newsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  news: newsReducer,
  form: formReducer
});