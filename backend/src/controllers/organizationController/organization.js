const Organization = require('../../models/HASAN.organization.model');
const User = require('../../models/HASAN.user.model')

const errorHandler = require('../../helpers/errorHandler')

// ПОЛУЧАЕМ ОРГАНИЗАЦИЮ по userID
module.exports.getByUserID = async function (req, res) {
  try {
    const org = await Organization.find({ creator: req.params.userID })
    res.status(200).json(org)
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
