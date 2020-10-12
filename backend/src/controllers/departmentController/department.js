const Organization = require('../../models/HASAN.organization.model');
const Department = require('../../models/HASAN.department.model');
const User = require('../../models/HASAN.user.model')
const short = require('short-uuid');


const errorHandler = require('../../helpers/errorHandler')

// ПОЛУЧАЕМ ДЕПАРТМЕНТ по userID
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

// СОЗДАЕМ ДЕПАРТМЕНТ
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

// УДАЛЯЕМ ДЕПАРТМЕНТ
module.exports.delete = async function (req, res) {
  try {
    await Department.remove({ _id: req.params.id })
    res.status(200).json({
      message: 'Департамент удален'
    })

  } catch (e) {
    errorHandler(res, e)
  }

}

// ОБНОВЛЯЕМ ДЕПАРТМЕНТ
module.exports.update = async function (req, res) {
  const { id: depID } = req.params
  const { workerEmail } = req.body
  console.log(workerEmail);
  console.log(depID);

  try {
    const updateUser = await User.findOneAndUpdate(
      { email: workerEmail },
      { $push: { departments: depID } },
      { new: true }
    );

    const dataToFront = {
      email: workerEmail,
      name: updateUser.name,
      surname: updateUser.surname,
      _id: updateUser._id
    }

    await Department.findOneAndUpdate(
      { _id: depID },
      {
        $push: {
          workers: dataToFront
        }
      }
    );
    res.status(200).json(dataToFront)
  } catch (e) {
    errorHandler(res, e)
  }
}
