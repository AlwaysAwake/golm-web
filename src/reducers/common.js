import * as ActionTypes from '../constants/actions';

const initialState = {
  isFetching: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DO_FETCH:
      return {
        ...state,
        isFetching: true,
      };

    case ActionTypes.SET_USER:
    case ActionTypes.SET_POLL:
    case ActionTypes.SET_POLLS:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default users;
