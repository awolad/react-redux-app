import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { category } from './category';
import { post } from './post';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  category,
  post,
});

export default rootReducer;
