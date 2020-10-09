import * as ACTIONS_TYPES from './actionTypes'

const REGISTRATION = (userData) => {
  console.log('ACTION_CREATOR_REGISTRATION', userData)
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
      isAuth: true,
    }
  }
}

const LOGOUT = (name) => {
  console.log(name, 'userdata')

  return {
    type: ACTIONS_TYPES.LOGOUT,
    payload: {
      name,
    }
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
