import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const store = configureStore();

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root'),
);
