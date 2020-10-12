const mongoose = require('mongoose');


const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  organization: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
  head: [],
  workers: [],
  videoConf: String,
  chat: String
});

module.exports = mongoose.model('Department', departmentSchema);
