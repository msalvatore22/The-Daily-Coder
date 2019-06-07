import { FETCH_NEWS, SEARCH_NEWS } from '../actions/types';


 const initialState = {
   articles: [],
   topic: [],
   pages: 0,
   total: 0
 }

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return Object.assign({}, state, {
        articles: action.payload
      })
    case SEARCH_NEWS:
      return Object.assign({}, state, {
        articles: action.payload,
        topic: action.values,
        pages: action.pages,
        total: action.total
      })
    default:
      return state;
  }
}