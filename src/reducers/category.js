import {
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  pending: false,
  categories: [],
  error: null,
};

export const category = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: action.payload,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error.message,
      };
    default:
      return state;
  }
};

// selectors
export const getCategories = state => state.category.categories;
export const getCategoriesPending = state => state.category.pending;
export const getCategoriesError = state => state.category.error;
