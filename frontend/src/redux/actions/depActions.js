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

const WORKER_TO_DEP = (orgID, depID, workerObj) => {
  return {
    type: ACTIONS_TYPES.WORKER_TO_DEP,
    payload: {
      orgID, depID, workerObj
    }
  }
};




export {
  DEP_ADD_DEP,
  ORG_KEY_IN_DEP,
  WORKER_TO_DEP
} 
