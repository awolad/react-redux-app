// const INITIAL_STATE = {
//   categories: [],
// };
import { FETCH_CATEGORIES_SUCCESS } from '../actions/actionTypes';

export const categories = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
