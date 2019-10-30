import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST_PENDING,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  pending: false,
  posts: [],
  error: null,
  post: null,
};

export const post = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error.message,
      };
    case FETCH_POST_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        post: action.payload,
      };
    case FETCH_POST_FAILURE:
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
