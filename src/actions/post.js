import axios from 'axios';
import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './actionTypes';

function fetchPostsPending() {
  return {
    type: FETCH_POSTS_PENDING,
  };
}

function fetchPostsSuccess(categories) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: categories,
  };
}

function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    error,
  };
}

export const fetchPosts = () => (dispatch) => {
  dispatch(fetchPostsPending());
  axios
    .get(`${process.env.REACT_APP_API_HOST}/posts`)
    .then((res) => {
      dispatch(fetchPostsSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchPostsFailure(error));
    });
};
