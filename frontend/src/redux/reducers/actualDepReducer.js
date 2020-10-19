import * as ACTION_TYPES from "../actions/actionTypes";


const actualDepReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.DEP_ACTUAL:
      return {

        ...state,
        ...action.payload
      }

    case ACTION_TYPES.DEP_CLEAR_ACTUAL:
      return {}



    default:
      return state
  }
}

export default actualDepReducer
