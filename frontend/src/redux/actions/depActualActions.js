import * as ACTIONS_TYPES from './actionTypes'

const DEP_ACTUAL = (depObject) => {
  console.log(depObject, 'depObject');
  return {
    type: ACTIONS_TYPES.DEP_ACTUAL,
    payload: depObject
  }
};






export {
  DEP_ACTUAL
} 
