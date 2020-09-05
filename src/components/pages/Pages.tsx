import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Kanban = React.lazy(() => import('./kanban/Kanban'));

export interface PagesProps {}

const Pages: React.FC<PagesProps> = () => (
  <Switch>
    <Redirect from="/" to="/Kanban" />
    <Route path="/Kanban" component={Kanban} />
  </Switch>
);

export default Pages;
