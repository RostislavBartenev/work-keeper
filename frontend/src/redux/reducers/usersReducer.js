import * as ACTION_TYPES from "../actions/actionTypes";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.REGISTRATION:
    case ACTION_TYPES.MAIN_USER:
      return {
        ...state,
        ...action.payload
      };
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state
  }
}

export default userReducer
