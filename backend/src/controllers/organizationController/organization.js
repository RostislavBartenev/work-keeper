const Organization = require('../../models/HASAN.organization.model');
const User = require('../../models/HASAN.user.model')

const errorHandler = require('../../helpers/errorHandler')


const serializeUser = (user, isCreator) => ({
  organization: user.organization,
  departments: user.departments,
  _id: user._id,
  name: user.name,
  surname: user.surname,
  email: user.email,
  accessToken: user.accessToken,
  refreshToken: user.refreshToken,
  __v: user.__v,
  isCreator: isCreator

})

// ПОЛУЧАЕМ ОРГАНИЗАЦИЮ по userID
module.exports.getAllInfo = async function (req, res) {
  const { userID } = req.query

  try {

    const thisUser = await User.findOne({ _id: userID })

    console.log(thisUser.organization == true, 'CHECK');
    let isCreator;

    // ЕСЛИ СОЗДАТЕЛЬ компании
    if (thisUser.organization.length) {
      isCreator = true;

      thisUser
        .populate({
          path: 'organization',
          populate: { path: 'departments' }
        })
        .execPopulate();

      const userToSand = serializeUser(thisUser, isCreator)
      console.log(userToSand, '<<<<<<<CREATORUser');

      return res.status(200).json(userToSand) // объект плюс isCreator: true/false
    }

    // если НЕ СОЗДАТЕЛЬ компании
    isCreator = false;
    thisUser
      .populate('departments')
      .execPopulate();

    const userToSand = serializeUser(thisUser, isCreator)
    console.log(userToSand, '<<<<<<<WORKERUser');

    return res.status(200).json(userToSand) // объект плюс isCreator: true/false

  } catch (e) {
    errorHandler(res, e)
  }
}

// СОЗДАЕМ ОРГАНИЗАЦИЮ
module.exports.create = async function (req, res) {
  try {
    const { nameOrg, userID } = req.body
    console.log('REQBODY', req.body);

    const newOrg = new Organization({
      creator: userID,
      name: nameOrg
    });

    await newOrg.save();

    await User.findOneAndUpdate(
      { _id: userID },
      { $push: { organization: newOrg._id } }
    );


    res.status(201).json(newOrg)
  } catch (e) {
    errorHandler(res, e)
  }



}

// УДАЛЯЕМ ОРГАНИЗАЦИЮ
module.exports.delete = async function (req, res) {
  try {
    await Organization.remove({ _id: req.params.id })
    res.status(200).json({
      message: 'Организация удалена'
    })

  } catch (e) {
    errorHandler(res, e)
  }

}

// ОБНОВЛЯЕМ ОРГАНИЗАЦИЮ
module.exports.update = function (req, res) {
  try {
    console.log(req.params);
  } catch (e) {
    errorHandler(res, e)
  }
}
