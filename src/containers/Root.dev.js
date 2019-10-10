import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import DevTools from './DevTools';
import App from './App';
import PostIndex from './PostIndex';
import Default from '../layouts/Default';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

AppRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
};

const Root = ({ store }) => (
  <Provider store={store}>
    <>
      <AppRoute exact path="/" layout={Default} component={App} />
      <AppRoute exact path="/posts" layout={Default} component={PostIndex} />
      <DevTools />
    </>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
export default Root;
