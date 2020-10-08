const data = {

  organizations: [
    {
      _id: 'orgID123456789',
      name: 'BigCorp',
      creator: 'userID11111', // id пользователя
      departments: ['depID123']
    }
  ],

  departments: [
      {
      _id: 'depID123',
      name: 'IT',
      head: ['userID123', 'userID134'],
      workers: ['userID1', 'userID2', 'userID3'],
      videoConf: 'has-udh-asu-d88-123',
    }
  ],

  user: [
    {
      _id: 'userID11111',
      name: 'Igor',
      surname: 'Bogdanov',
      password: '123',
    }
  ],



}
