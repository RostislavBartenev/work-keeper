import { combineReducers } from 'redux'
import usersReducer from "./usersReducer";
import aboutMeReducer from "./aboutMeReducer";


export default combineReducers({
  users: usersReducer,
  aboutMe: aboutMeReducer,
})
