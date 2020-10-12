const Organization = require('../../models/HASAN.organization.model');
const User = require('../../models/HASAN.user.model')

const errorHandler = require('../../helpers/errorHandler')

// ПОЛУЧАЕМ ОРГАНИЗАЦИЮ по userID
module.exports.getAllInfo = async function (req, res) {
  const { userID } = req.query

  try {
    // const org = await Organization.find({ creator: userID }).populate({ path: 'Department' })
    /*
     MAIN PAGE
    User populate organizations departments
  
    res  USer,
  
    одинаковые EMAIL-ы
    */
    console.log(org);

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
