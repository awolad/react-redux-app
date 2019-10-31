import {
  FETCH_AUTHOR_PENDING,
  FETCH_AUTHOR_SUCCESS,
  FETCH_AUTHOR_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  pending: false,
  author: null,
  error: null,
};

export const author = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHOR_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_AUTHOR_SUCCESS:
      return {
        ...state,
        pending: false,
        author: action.payload,
      };
    case FETCH_AUTHOR_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// Define selectors here if needed ...
