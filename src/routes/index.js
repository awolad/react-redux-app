import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoute from './AppRoute';
import Home from '../containers/Home';
import PostIndex from '../containers/PostIndex';
import Default from '../layouts/Default';
import WithoutSlider from '../layouts/WithoutSlider';
import WithRightSidebar from '../layouts/WithRightSidebar';
import NotFound from '../layouts/NotFound';
import AdNotFound from '../components/AdNotFound';
import SinglePost from '../containers/SinglePost';
import CategoryPostIndex from '../containers/CategoryPostIndex';

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
      <AppRoute
        exact
        path="/categories/:id"
        layout={WithoutSlider}
        component={CategoryPostIndex}
      />
      <AppRoute
        exact
        path="/:id/:slug"
        layout={WithRightSidebar}
        component={SinglePost}
      />
      <AppRoute path="*" layout={NotFound} component={AdNotFound} />
    </Switch>
  </Router>
);

export default Routes;
