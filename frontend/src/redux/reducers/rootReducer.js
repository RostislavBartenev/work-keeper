import { combineReducers } from 'redux'
import usersReducer from "./usersReducer";
import aboutMeReducer from "./aboutMeReducer";
import orgReducer from './orgReducer'


export default combineReducers({
  user: usersReducer,
  aboutMe: aboutMeReducer,
  organizations: orgReducer
})
