import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
// import DevTools from './DevTools';
import Routes from '../routes';

const Root = ({ store }) => (
  <Provider store={store}>
    <>
      <Routes />
      {/* <DevTools /> */}
    </>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
export default Root;
