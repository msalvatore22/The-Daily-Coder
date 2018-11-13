import { FETCH_NEWS, SEARCH_NEWS } from '../actions/types';


 const initialState = {
   articles: [],
   selectedArticle: null
 }

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return Object.assign({}, state, {
        articles: action.payload
      })
    case SEARCH_NEWS:
      return Object.assign({}, state, {
        articles: action.payload
      })
    default:
      return state;
  }
}