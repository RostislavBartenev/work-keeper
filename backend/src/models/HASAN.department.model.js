const mongoose = require('mongoose');


const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  head: [],
  workers: [],
  videoConf: String,
  chat: String
});

module.exports = mongoose.model('Department', departmentSchema);
