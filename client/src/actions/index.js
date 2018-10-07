import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_NEWS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
    
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchNews = () => async dispatch => {
  const res = await axios.get('/api/news');
  
  dispatch({ type: FETCH_NEWS, payload: res.data });
}

