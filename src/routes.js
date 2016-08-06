import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import {
  Main,
  Signin,
  Signup,
  PollView,
  PollAddView
} from './containers';
import { NotFound } from './components';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="polls/add" component={PollAddView} />
    <Route path="polls/:id" component={PollView} />
    <Route path="signin" component={Signin} />
    <Route path="signup" component={Signup} />
    <Route path="*" component={NotFound} />
  </Route>
);
