import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import Routes from '../routes';

const Root = ({ store }) => (
  <Provider store={store}>
    <>
      <Routes />
      <ReduxToastr />
    </>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.objectOf(PropTypes.object()).isRequired,
};
export default Root;
