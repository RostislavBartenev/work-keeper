import * as ACTIONS_TYPES from './actionTypes'

const DEP_ADD_DEP = (orgID, depObject) => {
  return {
    type: ACTIONS_TYPES.DEP_ADD_DEP,
    payload: {
      orgID,
      depObject
    }
  }
};






export {
  DEP_ADD_DEP
} 
