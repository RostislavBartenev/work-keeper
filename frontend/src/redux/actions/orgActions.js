import * as ACTIONS_TYPES from './actionTypes'

const ORG_ADD_ORG = (orgObject) => {
  return {
    type: ACTIONS_TYPES.ORG_ADD_ORG,
    payload: {
      ...orgObject
    }
  }
};

const DEP_TO_ORG = (orgID, depID) => {
  return {
    type: ACTIONS_TYPES.DEP_TO_ORG,
    payload: {
      orgID,
      depID
    }
  }
};




export {
  ORG_ADD_ORG,
  DEP_TO_ORG
} 
