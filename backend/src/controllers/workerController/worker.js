const Organization = require('../../models/HASAN.organization.model');
const Department = require('../../models/HASAN.department.model');
const User = require('../../models/HASAN.user.model')
const short = require('short-uuid');


const errorHandler = require('../../helpers/errorHandler')

// ПОЛУЧАЕМ WORKER по userID
module.exports.getAllInfo = async function (req, res) {
  const { userID } = req.query

  try {
    const org = await Organization.find({ creator: userID }).populate({ path: 'Department' })
    console.log(org);

    res.status(200).json(org)
  } catch (e) {
    errorHandler(res, e)
  }
}

// СОЗДАЕМ WORKER-а 
module.exports.create = async function (req, res) {
  try {
    const { nameDepart, userID, orgID } = req.body
    console.log('REQBODY', req.body);

    const newDepart = new Department({
      creator: userID,
      name: nameDepart,
      videoConf: short.generate(),
      chat: short.generate()
    });

    console.log(newDepart);

    await newDepart.save();

    await Organization.findOneAndUpdate(
      { _id: orgID },
      { $push: { departments: newDepart._id } }
    );


    res.status(201).json(newDepart)
  } catch (e) {
    errorHandler(res, e)
  }



}

// УДАЛЯЕМ WORKER
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

// ОБНОВЛЯЕМ WORKER
module.exports.update = function (req, res) {
  try {
    console.log(req.params);
  } catch (e) {
    errorHandler(res, e)
  }
}
