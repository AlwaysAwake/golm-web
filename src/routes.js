import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import {
  Main,
  Signin,
  PollView,
} from './containers';
import { NotFound } from './components';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="polls/:id" component={PollView} />
    <Route path="*" component={NotFound} />
  </Route>
);
