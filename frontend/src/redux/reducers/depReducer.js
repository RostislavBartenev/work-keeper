import * as ACTION_TYPES from "../actions/actionTypes";


const depReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.DEP_ADD_DEP:
      return {
        ...state,
        [action.payload.orgID]: [
          ...state[action.payload.orgID],
          action.payload.depObject
        ]
      }



    default:
      return state
  }
}

export default depReducer
