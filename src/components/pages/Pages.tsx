import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Kanban = React.lazy(() => import('./kanban/Kanban'));

export interface PagesProps {}

const Pages: React.FC<PagesProps> = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Redirect exact from="/" to="/Kanban" />
      <Route path="/Kanban" component={Kanban} />
    </Switch>
  </Suspense>
);

export default Pages;
