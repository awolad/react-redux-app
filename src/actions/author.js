import {
  FETCH_AUTHOR_PENDING,
  FETCH_AUTHOR_SUCCESS,
  FETCH_AUTHOR_FAILURE,
} from './actionTypes';
import { authorService } from '../service/api/author.service';

/**
 * Fetch post by ID
 */

function fetchAuthorPending() {
  return {
    type: FETCH_AUTHOR_PENDING,
  };
}

function fetchAuthorSucess(author) {
  return {
    type: FETCH_AUTHOR_SUCCESS,
    payload: author,
  };
}

function fetchAuthorFailure(error) {
  return {
    type: FETCH_AUTHOR_FAILURE,
    error,
  };
}

export const fetchAuthor = (authorID) => async (dispatch) => {
  dispatch(fetchAuthorPending());
  const result = await authorService.getAuthorByID(authorID).catch((err) => {
    dispatch(fetchAuthorFailure(err));
  });

  if (result) {
    dispatch(fetchAuthorSucess(result));
  }
};
