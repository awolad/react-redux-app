import { combineReducers } from 'redux';

const dummyPosts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' },
];

const posts = (state = dummyPosts, action) => state;

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
