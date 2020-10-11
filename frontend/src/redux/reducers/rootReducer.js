import { combineReducers } from 'redux'
import usersReducer from "./usersReducer";
import aboutMeReducer from "./aboutMeReducer";
import orgReducer from './orgReducer'
import depReducer from './depReducer'


export default combineReducers({
  user: usersReducer,
  aboutMe: aboutMeReducer,
  organizations: orgReducer,
  departments: depReducer
})
