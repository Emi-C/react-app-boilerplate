import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';

const Router = () => (
  <Switch>
    {routes.map((route) => (
      <Route
        key={route.id}
        exact={route.exact || true}
        path={route.path}
        component={route.component}
      />
    ))}
  </Switch>
);

export default Router;
