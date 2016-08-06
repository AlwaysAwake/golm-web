import fetch from 'isomorphic-fetch';
import * as ActionTypes from '../constants/actions';

import { apiBaseURL } from '../constants/api';
import { parseJSON, checkStatus } from '../utils/promiseMiddleware';


export function doFetch() {
  return {
    type: ActionTypes.DO_FETCH,
  };
}

export function setPoll(res) {
  return {
    type: ActionTypes.SET_POLL,
    poll: res.poll,
  };
}

export function fetchPoll(id) {
  return (dispatch) => {
    dispatch(doFetch());
    return fetch(`${apiBaseURL}/polls/${id}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(res => dispatch(setPoll(res)));
  };
}

export function setPolls(res) {
  return {
    type: ActionTypes.SET_POLLS,
    polls: res.polls,
  };
}

export function fetchPolls() {
  return (dispatch) => {
    dispatch(doFetch());
    return fetch(`${apiBaseURL}/polls`)
      .then(checkStatus)
      .then(parseJSON)
      .then(res => dispatch(setPolls(res)));
  };
}

export function setUser(res) {
  return {
    type: ActionTypes.SET_USER,
    user: res.user,
  };
}

export function signUp({ user }) {
  return (dispatch) => {
    dispatch(doFetch());
    return fetch(`${apiBaseURL}/users/signup`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        user,
      }),
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(res => dispatch(setUser(res)));
  };
}

export function signIn({ user }) {
  return (dispatch) => {
    dispatch(doFetch());
    return fetch(`${apiBaseURL}/users/signin`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        user,
      }),
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(res => dispatch(setUser(res)));
  };
}
