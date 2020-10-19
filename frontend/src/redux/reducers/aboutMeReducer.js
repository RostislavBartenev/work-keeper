import * as ACTION_TYPES from "../actions/actionTypes";


const aboutMeReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.IS_ME:
      return {
        ...state,
        isMe: true,
        isCreator: true,
      }

    case ACTION_TYPES.IS_NOT_ME:
      return {
        ...state,
        isMe: false,
      }

    case ACTION_TYPES.MAIN_IS_CREATOR:
      return {
        ...state,

        isCreator: true,
      }


    case ACTION_TYPES.MAIN_IS_NOT_CREATOR:
      return {
        ...state,
        isCreator: false,
      }




    default:
      return state
  }
}

export default aboutMeReducer
