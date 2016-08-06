import * as ActionTypes from '../constants/actions';

const initialState = {
  polls: [],
};

const polls = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_POLL:
      return {
        ...state,
        poll: action.poll,
      };

    case ActionTypes.SET_POLLS:
      return {
        ...state,
        polls: action.polls,
      };

    default:
      return state;
  }
};

export default polls;
