import * as ACTIONS_TYPES from './actionTypes'

const REGISTRATION = (userData) => {
  return {
    type: ACTIONS_TYPES.REGISTRATION,
    payload: {
      ...userData
    }
  }
};



const LOGIN = (userData) => {
  return {
    type: ACTIONS_TYPES.LOGIN,
    payload: {
      ...userData,
    }
  }
}

const LOGOUT = () => {
  return {
    type: ACTIONS_TYPES.LOGOUT,
    payload: {}
  }
}

const IS_ME = () => {
  return {
    type: ACTIONS_TYPES.IS_ME,
    payload: {
    }
  }
};

const IS_NOT_ME = () => {
  return {
    type: ACTIONS_TYPES.IS_NOT_ME,
    payload: {
    }
  }
};


export {
  REGISTRATION,
  LOGIN,
  IS_ME,
  LOGOUT,
  IS_NOT_ME
}
