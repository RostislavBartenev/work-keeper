import { combineReducers } from 'redux'
import usersReducer from "./usersReducer";
import aboutMeReducer from "./aboutMeReducer";
import orgReducer from './orgReducer'
import depReducer from './depReducer'
import actualDepReducer from './actualDepReducer'

export default combineReducers({
  user: usersReducer,
  aboutMe: aboutMeReducer,
  organizations: orgReducer,
  departments: depReducer,
  department: actualDepReducer
})
