/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PhotosPage from './containers/PhotosPage';
import CollectionsPage from './containers/CollectionsPage';
import ImportsPage from './containers/ImportsPage';
import BackupsPage from './containers/BackupsPage';

export default () => (
  <App>
    <Switch>
      <Route path="/photos" component={PhotosPage} />
      <Route path="/collections" component={CollectionsPage} />
      <Route path="/imports" component={ImportsPage} />
      <Route path="/backups" component={BackupsPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
