const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  organization: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' }],

  departments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Department' }]
});

module.exports = mongoose.model('User', userSchema);


/*
+++++++++++++++++++++ ПРОВЕРИТЬ РЕГИСТРАЦИЮ И ЛОГИН ЕЩЕ РАЗ



главный добавляет email сотрудника в определенный департмент:
1. в Department.worker
2. User.deparments
*/


/* логиниться Сотрудник:

useEffect подгружается весь User и выводяться департменты, в которых он состоит
*/

//////////////////////////////

/* РУЧКИ
User вошел - редирект на главную
/     - отображаются имя organization и список департаментов , // useEffect (департменты и сам юзер, )
/department/:id - ссылки при нажатии на департментс



--------------------------------------------------
  * DEPARTMENTS расписать в OrganizationInfo
  * MainPage по аналогии с ProfilePage






---------------------------------------

>>>

>>>
>>>
>>>
>>>
>>>
*/
