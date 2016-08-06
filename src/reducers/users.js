import * as ActionTypes from '../constants/actions';

const initialState = {};

const users = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};

export default users;
