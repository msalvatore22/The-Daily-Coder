import axios from 'axios';
import { FETCH_USER, FETCH_NEWS, SEARCH_NEWS, SAVE_ARTICLE } from './types';


export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
    
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchNews = () => async dispatch => {
  const res = await axios.get('/api/news');
  
  dispatch({ type: FETCH_NEWS, payload: res.data });
}

export const searchNews = (values) => async dispatch => {
  const res = await axios.post('/api/news', values);
  
  dispatch({ type: SEARCH_NEWS, payload: res.data})
}

export const saveArticle = (values) => async dispatch => {
  const res = await axios.post('/api/articles', values);

  dispatch({ type: SAVE_ARTICLE, payload: res.data})
}

