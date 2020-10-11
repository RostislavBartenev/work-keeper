const initialState = () => {
  const initialValue = {
    aboutMe: {},

    user: {
    },

    organizations: [],

    departments: {
      departmentsArr: []
    }
  }

  return JSON.parse(localStorage.getItem('redux')) || initialValue

}

/*  const initialValue = {
      aboutMe: {
        isMe: true/false
      },

     user: {
      name: 'dfd'
      surname
      email
      id
     },

    contactsForChat: [
      {
        id: 'a',
        surname:
        name: 
    
    },
      {},

    ]
// }
*/


export default initialState


