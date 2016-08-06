import fetch from 'isomorphic-fetch';
import * as ActionTypes from '../constants/actions';

import { apiBaseURL } from '../constants/api';
import { parseJSON, checkStatus } from '../utils/promiseMiddleware';


export function setPoll(res) {
  return {
    type: ActionTypes.SET_POLL,
    poll: res.poll,
  };
}

export function fetchPoll(id) {
  return (dispatch) => {
    return fetch(`${apiBaseURL}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(res => dispatch(setPoll(res)));
  };
}
