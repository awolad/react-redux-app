import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
// import DevTools from './DevTools';
import ReduxToastr from 'react-redux-toastr';
import Routes from '../routes';

const Root = ({ store }) => (
  <Provider store={store}>
    <>
      <Routes />
      <ReduxToastr />
      {/* <DevTools /> */}
    </>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
export default Root;
