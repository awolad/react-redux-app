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
export const fetchCategories = () => (dispatch) => {
  dispatch(fetchCategoriesPending());
  axios
    .get(`${process.env.REACT_APP_URL}/data/categoriess.json`)
    .then((res) => {
      dispatch(fetchCategoriesSuccess(res.data));
    })
    .catch((error) => {
      console.log(error.response);
      console.log(error);
      console.log(error.response.status);
      console.log(error.response.statusText);
      console.log(error.response.data);
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
//   dispatch({
//     type: FETCH_CATEGORIES_SUCCESS,
//     payload: res.data,
//   });
// };
