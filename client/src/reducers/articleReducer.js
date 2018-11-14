import { SAVE_ARTICLE, FETCH_SAVED_ARTICLES } from '../actions/types';


export default function(state = {}, action) {
  switch (action.type) {
    case SAVE_ARTICLE:
      return action.payload
    case FETCH_SAVED_ARTICLES:
      return action.payload
    default:
      return state;
  }
}