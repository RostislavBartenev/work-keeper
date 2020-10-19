import * as ACTIONS_TYPES from './actionTypes'

const ORG_ADD_ORG = (orgObject) => {
  return {
    type: ACTIONS_TYPES.ORG_ADD_ORG,
    payload: {
      ...orgObject
    }
  }
};

const DEP_TO_ORG = (orgID, depObj) => {
  return {
    type: ACTIONS_TYPES.DEP_TO_ORG,
    payload: {
      orgID,
      depObj
    }
  }
};




export {
  ORG_ADD_ORG,
  DEP_TO_ORG
} 
