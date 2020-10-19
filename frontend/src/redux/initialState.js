const initialState = () => {
  const initialValue = {
    aboutMe: {
      isCreator: true,
    },

    user: {},

    organizations: [],

    departments: {},

    department: {},

    workerDeps: [],

    loading: false

  }

  return JSON.parse(localStorage.getItem('redux')) || initialValue

}


export default initialState


