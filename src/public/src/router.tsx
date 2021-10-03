// React
import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';

// Components
const Home = lazy(() => import('./pages/home.component'));
const NotFound = lazy(() => import('./pages/not-found.component'));

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
