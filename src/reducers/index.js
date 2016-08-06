import { combineReducers } from 'redux';
import common from './common';
import polls from './polls';
import users from './users';

export default combineReducers({
  common,
  polls,
  users,
});
