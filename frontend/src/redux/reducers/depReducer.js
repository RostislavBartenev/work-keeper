import * as ACTION_TYPES from "../actions/actionTypes";


const depReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.DEP_ADD_DEP:
      return {
        ...state,
        [action.payload.orgID]: [
          ...state[action.payload.orgID],
          action.payload.depObject
        ]
      }

    case ACTION_TYPES.ORG_KEY_IN_DEP:
      return {
        ...state,
        [action.payload.orgID]: []
      }


    case ACTION_TYPES.WORKER_TO_DEP:

      return {
        ...state,
        [action.payload.orgID]: state[action.payload.orgID].map((dep) => {
          if (dep._id === action.payload.depID) return {
            ...dep,
            workers: [
              ...dep.workers, action.payload.workerObj
            ]
          }
          return dep;
        })
      }

    case ACTION_TYPES.MAIN_DEPARTMENTS:

      return {
        [action.payload.orgID]: [
          ...action.payload.departments
        ]
      }

    case ACTION_TYPES.MAIN_CREATOR_DEPARTMENTS:

      const orgArr = action.payload.organization

      const newObj = {}
      for (let i = 0; i < orgArr.length; i++) {
        newObj[orgArr[i]._id] = orgArr[i].departments
      }

      return newObj


    default:
      return state
  }
}

export default depReducer
