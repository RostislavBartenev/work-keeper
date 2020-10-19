import * as ACTIONS_TYPES from './actionTypes'


const MAIN_USER = (userInfo) => {
  return {
    type: ACTIONS_TYPES.MAIN_USER,
    payload: userInfo
  }
};

const MAIN_IS_CREATOR = () => {
  return {
    type: ACTIONS_TYPES.MAIN_IS_CREATOR,
    payload: true
  }
};

const MAIN_IS_NOT_CREATOR = () => {
  return {
    type: ACTIONS_TYPES.MAIN_IS_NOT_CREATOR,
    payload: false
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

// organization - ЭТО МАССИВ ОБЪЕКТОВ
const MAIN_CREATOR_DEPARTMENTS = (organization) => {
  return {
    type: ACTIONS_TYPES.MAIN_CREATOR_DEPARTMENTS,
    payload: {
      organization
    }
  }
};


// organization - ЭТО МАССИВ ОБЪЕКТОВ
const MAIN_CREATOR_ORGANIZATIONS = (organization) => {
  return {
    type: ACTIONS_TYPES.MAIN_CREATOR_ORGANIZATIONS,
    payload: {
      organization
    }
  }
};

const MAIN_ORGANIZATIONS = (orgObj) => {
  return {
    type: ACTIONS_TYPES.MAIN_ORGANIZATIONS,
    payload: orgObj
  }
};

const BACK_WORKER_DEPS = (depArr) => {
  return {
    type: ACTIONS_TYPES.BACK_WORKER_DEPS,
    payload: {
      depArr
    }
  }
};



export {
  MAIN_USER,
  MAIN_DEPARTMENTS,
  MAIN_ORGANIZATIONS,
  MAIN_CREATOR_ORGANIZATIONS,
  MAIN_CREATOR_DEPARTMENTS,
  MAIN_IS_CREATOR,
  MAIN_IS_NOT_CREATOR,
  BACK_WORKER_DEPS,
} 
