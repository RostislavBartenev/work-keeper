import * as ACTION_TYPES from "../actions/actionTypes";


const actualDepReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.DEP_ACTUAL:
      return {
        ...action.payload
      }

    default:
      return state
  }
}

export default actualDepReducer
