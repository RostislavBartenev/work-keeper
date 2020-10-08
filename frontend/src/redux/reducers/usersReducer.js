import * as ACTION_TYPES from "../actions/actionTypes";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.REGISTRATION:
      return {
        ...state,
        [action.payload.name]: action.payload
      };
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        [action.payload.name]: action.payload
      };
    case ACTION_TYPES.LOGOUT:
      delete state[action.payload.name]
      return {
        ...state
      }

    default:
      return state
  }
}

export default userReducer
