import * as ACTION_TYPES from "../actions/actionTypes";


const aboutMeReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.IS_ME:
      return {
        ...state,
        isMe: true,
      }

    case ACTION_TYPES.IS_NOT_ME:
      return {
        ...state,
        isMe: false,
      }

    case ACTION_TYPES.MAIN_IS_CREATOR:
      return {
        ...state,
        isCreator: action.payload.isCreator
      }

    default:
      return state
  }
}

export default aboutMeReducer
