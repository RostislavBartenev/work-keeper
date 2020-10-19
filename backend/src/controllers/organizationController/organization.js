const Organization = require('../../models/HASAN.organization.model');
const User = require('../../models/HASAN.user.model')

const errorHandler = require('../../helpers/errorHandler')

const serializeUser = (user) => ({
  organization: user.organization,
  departments: user.departments,
  _id: user._id,
  name: user.name,
  surname: user.surname,
  email: user.email,
  accessToken: user.accessToken,
  refreshToken: user.refreshToken,
  __v: user.__v,

})

module.exports.getAllInfo = async function (req, res) {
  const { userID } = req.query

  try {

    const thisUser = await User.findOne({ _id: userID })
      .populate('organization')
      .populate({
        path: 'departments',
        populate: {
          path: 'organization',
          populate: { path: 'departments' }
        }
      })
      .populate({
        path: 'organization',
        populate: { path: 'departments' }
      })

    const userToSand = serializeUser(thisUser)

    return res.status(200).json(userToSand)

  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function (req, res) {
  try {
    const { nameOrg, userID } = req.body

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
