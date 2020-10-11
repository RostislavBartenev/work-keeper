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

const ORG_KEY_IN_DEP = (orgID) => {
  return {
    type: ACTIONS_TYPES.ORG_KEY_IN_DEP,
    payload: {
      orgID
    }
  }
};





export {
  DEP_ADD_DEP,
  ORG_KEY_IN_DEP,
} 
