import { combineReducers } from 'redux';
import authReducer from './authReducer';
import newsReducer from './newsReducer';
import { reducer as formReducer } from 'redux-form';
import articleReducer from './articleReducer';

export default combineReducers({
  auth: authReducer,
  news: newsReducer,
  articles: articleReducer,
  form: formReducer
});