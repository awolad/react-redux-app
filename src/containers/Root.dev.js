import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import DevTools from './DevTools';
import App from './App';
import PostIndex from './PostIndex';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
      <Route path="/posts" component={PostIndex} />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
export default Root;
