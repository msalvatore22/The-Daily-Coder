import axios from 'axios';
import { FETCH_USER, FETCH_NEWS, SEARCH_NEWS, SAVE_ARTICLE, FETCH_SAVED_ARTICLES, FETCH_SAVED_ARTICLE, DELETE_SAVED_ARTICLE } from './types';


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

  dispatch({ type: SEARCH_NEWS, payload: res.data, values: values})
}

export const saveArticle = (values) => async dispatch => {
  try {
    const res = await axios.post('/api/articles', values);
    dispatch({ type: SAVE_ARTICLE, payload: res.data})
    console.log('saved article')
  } catch(error) {
    console.error('failed to save article')
    console.log(error)
  }
  
}

export const fetchSavedArticles = () => async dispatch => {
  const res = await axios.get('/api/articles');

  dispatch({ type: FETCH_SAVED_ARTICLES, payload: res.data })
}

export const fetchSavedArticle = (id) => async dispatch => {
  const res = await axios.get(`/api/articles/${id}`)

  dispatch({type: FETCH_SAVED_ARTICLE, payload: res.data })
}

export const deleteSavedArticle = (id, callback) => async dispatch => {
  await axios.delete(`/api/articles/${id}`, id);

  dispatch({type: DELETE_SAVED_ARTICLE, payload: id});
  callback()
}
