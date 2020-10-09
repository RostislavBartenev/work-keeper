const mongoose = require('mongoose');


const organizationSchema = new mongoose.Schema({
  name: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  departments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Department' }]
});



module.exports = mongoose.model('Organization', organizationSchema);
