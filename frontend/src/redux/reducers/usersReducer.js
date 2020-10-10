import * as ACTION_TYPES from "../actions/actionTypes";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.REGISTRATION:
      return {
        ...state,
        ...action.payload
      };
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        ...action.payload
      };
    case ACTION_TYPES.LOGOUT:
      return {}

    default:
      return state
  }
}

export default userReducer
