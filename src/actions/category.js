import axios from 'axios';
import {
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from './actionTypes';

function fetchCategoriesPending() {
  return {
    type: FETCH_CATEGORIES_PENDING,
  };
}

function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

function fetchCategoriesFailure(error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    error,
  };
}

export const fetchCategories = () => (dispatch) => {
  dispatch(fetchCategoriesPending());
  axios
    .get('/data/categories.json')
    .then((res) => {
      dispatch(fetchCategoriesSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchCategoriesFailure(error));
    });
};
