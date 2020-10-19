const Organization = require('../../models/HASAN.organization.model');
const Department = require('../../models/HASAN.department.model');
const User = require('../../models/HASAN.user.model')
const short = require('short-uuid');

const errorHandler = require('../../helpers/errorHandler')

module.exports.getAllInfo = async function (req, res) {
  const { userID } = req.query

  try {
    const org = await Organization.find({ creator: userID }).populate({ path: 'Department' })

    res.status(200).json(org)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function (req, res) {
  try {
    const { nameDepart, userID, orgID } = req.body

    const newDepart = new Department({
      creator: userID,
      name: nameDepart,
      organization: orgID,
      videoConf: short.generate(),
      chat: short.generate()
    });

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


module.exports.update = async function (req, res) {
  const { id: depID } = req.params
  let { workerEmail } = req.body

  workerEmail = workerEmail.toLowerCase()

  try {

    const updateUser = await User.findOne({ email: workerEmail })
    if (!updateUser) {
      return res.status(500).json({ message: 'Данного работника нет в базе системы. Попросите его зарегистрироваться.' })

    }

    const isPresent = updateUser.departments.find(dep => dep == depID)

    if (isPresent == undefined) {
      updateUser.departments.push(depID);
      await updateUser.save();

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
      return res.status(200).json(dataToFront)
    }

    return res.status(500).json({ message: 'Данный работник уже есть в системе!' })


  } catch (e) {
    errorHandler(res, e)
  }
}
