import * as ActionTypes from '../constants/actions';

const initialState = {

};

const polls = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_POLL:
      return {
        ...state,
        poll: action.poll,
      };

    default:
      return state;
  }
};

export default polls;
