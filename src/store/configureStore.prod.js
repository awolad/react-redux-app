import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [thunk];

const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));

export default configureStore;
