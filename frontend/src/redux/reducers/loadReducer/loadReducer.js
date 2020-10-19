import * as ACTIONS_TYPES from '../../actions/actionTypes'

const loadReducer = (state = false, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.IS_LOADING:
      return true;

    case ACTIONS_TYPES.NOT_LOADING:
      return false;

    default:
      return state;
  }
}

export default loadReducer
