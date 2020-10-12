import * as ACTIONS_TYPES from './actionTypes'

const MAIN_IS_CREATOR = (isCreator) => {
  return {
    type: ACTIONS_TYPES.MAIN_IS_CREATOR,
    payload: {
      isCreator
    }
  }
};

const MAIN_USER = (userInfo) => {
  return {
    type: ACTIONS_TYPES.MAIN_USER,
    payload: userInfo
  }
};

const MAIN_DEPARTMENTS = (orgID, departments) => {
  return {
    type: ACTIONS_TYPES.MAIN_DEPARTMENTS,
    payload: {
      orgID, departments
    }
  }
};

// organization - ЭТО МАССИВ
const MAIN_ORGANIZATIONS = (organization) => {
  return {
    type: ACTIONS_TYPES.MAIN_ORGANIZATIONS,
    payload: {
      organization
    }
  }
};




export {
  MAIN_IS_CREATOR,
  MAIN_USER,
  MAIN_DEPARTMENTS,
  MAIN_ORGANIZATIONS,
} 
