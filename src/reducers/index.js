import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { category } from './category';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  category,
});

export default rootReducer;
