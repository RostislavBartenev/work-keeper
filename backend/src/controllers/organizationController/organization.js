const Organization = require('../../models/HASAN.organization.model')
const errorHandler = require('../../helpers/errorHandler')

// ПОЛУЧАЕМ ОРГАНИЗАЦИЮ по idOfUser
module.exports.getByIdofUser = async function (req, res) {
  try {
    const org = await Organization.find({ creator: req.params.idOfUser })
    res.status(200).json(org)
  } catch (e) {
    errorHandler(res, e)
  }
}

// СОЗДАЕМ ОРГАНИЗАЦИЮ
module.exports.create = async function (req, res) {
  try {
    const { userID, name } = req.body
    const newOrg = new Organization({
      creator: userID,
      name: name
    });
    await newOrg.save();

    res.status(201).json(newOrg)
  } catch (e) {
    errorHandler(res, e)
  }



}

// УДАЛЯЕМ ОРГАНИЗАЦИЮ
module.exports.update = async function (req, res) {
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
