import * as ACTION_TYPES from "../actions/actionTypes";


const orgReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ORG_ADD_ORG:
      return [
        ...state,
        { ...action.payload },
      ]

    default:
      return state
  }
}

export default orgReducer
