import { SAVE_ARTICLE, FETCH_SAVED_ARTICLES, FETCH_SAVED_ARTICLE, DELETE_SAVED_ARTICLE } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case SAVE_ARTICLE:
      return action.payload
    case FETCH_SAVED_ARTICLES:
      return action.payload
    case FETCH_SAVED_ARTICLE:
      return action.payload
    case DELETE_SAVED_ARTICLE:
      return _.omit(state, action.payload)
    default:
      return state;
  }
}