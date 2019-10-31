import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { category } from './category';
import { post } from './post';
import { author } from './author';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  category,
  post,
  author,
});

export default rootReducer;
