import * as ACTIONS_TYPES from './actionTypes'

const DEP_ACTUAL = (depObject) => {
  return {
    type: ACTIONS_TYPES.DEP_ACTUAL,
    payload: depObject
  }
};

const DEP_CLEAR_ACTUAL = () => {
  return {
    type: ACTIONS_TYPES.DEP_CLEAR_ACTUAL,
    payload: {}
  }
};





export {
  DEP_ACTUAL,
  DEP_CLEAR_ACTUAL
}
