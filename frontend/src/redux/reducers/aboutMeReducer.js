import * as ACTION_TYPES from "../actions/actionTypes";


const aboutMeReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.IS_ME:
      return {
        ...state,
        isMe: true,
        isMyName: action.payload.nameOfUser
      }

    case ACTION_TYPES.IS_NOT_ME:
      return {
        ...state,
        isMe: false,
        isMyName: ''
      }


    default:
      return state
  }
}

export default aboutMeReducer
