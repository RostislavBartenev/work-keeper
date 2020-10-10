import * as ACTIONS_TYPES from './actionTypes'

const ORG_ADD_ORG = (orgObject) => {
  return {
    type: ACTIONS_TYPES.ORG_ADD_ORG,
    payload: {
      ...orgObject
    }
  }
};






export {
  ORG_ADD_ORG
} 
