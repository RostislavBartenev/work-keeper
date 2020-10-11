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

    case ACTION_TYPES.ORG_KEY_IN_DEP:
      return {
        ...state,
        [action.payload.orgID]: []
      }

    case ACTION_TYPES.DEP_ARR_AT_DEP:
      return {
        ...state,
        departmentsArr: [
          ...state.departmentsArr,
          action.payload
        ]
      }



    default:
      return state
  }
}

export default depReducer
