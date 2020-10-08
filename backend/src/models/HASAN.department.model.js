const mongoose = require('mongoose');


const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  head: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  workers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  videoConf: String
});

module.exports = mongoose.model('Department', departmentSchema);
