const initialState = () => {
  const initialValue = {
    aboutMe: {},

    users: {

    },
  }

  return JSON.parse(localStorage.getItem('redux')) || initialValue

}


export default initialState
