import { FETCH_NEWS, SEARCH_NEWS } from '../actions/types';


 const initialState = {
   articles: []
 }

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return Object.assign({}, state, {
        articles: action.payload,
        firstArticle: action.payload[0]
      })
    case SEARCH_NEWS:
      return Object.assign({}, state, {
        articles: action.payload,
        firstArticle: action.payload[0]
      })
    default:
      return state;
  }
}