import { SAVE_ARTICLE } from '../actions/types';


export default function(state = {}, action) {
  switch (action.type) {
    case SAVE_ARTICLE:
      return action.payload
    default:
      return state;
  }
}