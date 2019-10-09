import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import DevTools from './DevTools';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default Root;
