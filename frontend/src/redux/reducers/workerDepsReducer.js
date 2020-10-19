import * as ACTION_TYPES from "../actions/actionTypes";


const workerDepsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.BACK_WORKER_DEPS:
      return [
        ...action.payload.depArr
      ]

    default:
      return state
  }
}

export default workerDepsReducer
