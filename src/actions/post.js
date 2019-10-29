import axios from 'axios';
import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST_PENDING,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from './actionTypes';
import { postService } from '../service/api/post.service';

/**
 * Fetch all posts
 */
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

// export const fetchPosts = () => (dispatch) => {
//   dispatch(fetchPostsPending());
//   axios
//     .get(`${process.env.REACT_APP_API_HOST}/posts`)
//     .then((res) => {
//       dispatch(fetchPostsSuccess(res.data));
//     })
//     .catch((error) => {
//       dispatch(fetchPostsFailure(error));
//     });
// };

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

/**
 * Fetch post by ID
 */

function fetchPostPending() {
  return {
    type: FETCH_POST_PENDING,
  };
}

function fetchPostSucess(post) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: post,
  };
}

function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    error,
  };
}

// export const fetchPost = (postID) => (dispatch) => {
//   dispatch(fetchPostPending());
//   setTimeout(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_HOST}/posts/${postID}`)
//       .then((res) => {
//         dispatch(fetchPostSucess(res.data));
//       })
//       .catch((error) => {
//         dispatch(fetchPostFailure(error));
//       });
//   }, 5000);
// };

/**
 * async, await
 */
export const fetchPost = (postID) => async (dispatch) => {
  dispatch(fetchPostPending());
  const result = await postService.getPostByID(postID).catch((err) => {
    dispatch(fetchPostFailure(err));
  });

  if (result) {
    dispatch(fetchPostSucess(result));
  }
};
