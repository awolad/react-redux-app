import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoute from './AppRoute';
import Home from '../containers/Home';
import PostIndex from '../containers/PostIndex';
import Default from '../layouts/Default';
import WithoutSlider from '../layouts/WithoutSlider';
import NotFound from '../layouts/NotFound';
import AdNotFound from '../components/AdNotFound';

const Routes = () => (
  <Router>
    <Switch>
      <AppRoute exact path="/" layout={Default} component={Home} />
      <AppRoute
        exact
        path="/posts"
        layout={WithoutSlider}
        component={PostIndex}
      />
      <AppRoute path="*" layout={NotFound} component={AdNotFound} />
    </Switch>
  </Router>
);

export default Routes;
