import * as ACTION_TYPES from "../actions/actionTypes";


const orgReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ORG_ADD_ORG:
      return [
        ...state,
        { ...action.payload },
      ]


    case ACTION_TYPES.DEP_TO_ORG:
      return state.map(el => {
        if (el._id === action.payload.orgID) return {
          ...el,
          departments: [
            ...el.departments, action.payload.depID
          ]
        }
        return el;
      })


    default:
      return state
  }
}

export default orgReducer
