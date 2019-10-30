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

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsPending());
  const result = await postService.getAllPosts().catch((err) => {
    dispatch(fetchPostsFailure(err));
  });

  if (result) {
    dispatch(fetchPostsSuccess(result));
  }
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

export const fetchPost = (postID) => async (dispatch) => {
  dispatch(fetchPostPending());
  const result = await postService.getPostByID(postID).catch((err) => {
    dispatch(fetchPostFailure(err));
  });

  if (result) {
    dispatch(fetchPostSucess(result));
  }
};
