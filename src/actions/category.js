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

/**
 * then()
 */
// export const fetchCategories = () => (dispatch) => {
//   axios.get(`${process.env.REACT_APP_URL}/data/categories.json`).then((res) => {
//     console.log(res.data);
//     dispatch({
//       type: 'RECEIVE_CATEGORIES',
//       payload: res.data,
//     });
//   });
// };

export const fetchCategories = () => (dispatch) => {
  dispatch(fetchCategoriesPending());
  axios
    .get(`${process.env.REACT_APP_URL}/data/categories.json`)
    .then((res) => {
      dispatch(fetchCategoriesSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchCategoriesFailure(error));
    });
};

/**
 * async, await
 */
// export const fetchCategories = () => async (dispatch) => {
//   const res = await axios.get(
//     `${process.env.REACT_APP_URL}/data/categories.json`,
//   );
//   console.log(res.data);
//   dispatch({
//     type: FETCH_CATEGORIES_SUCCESS,
//     payload: res.data,
//   });
// };
