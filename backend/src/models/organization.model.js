const mongoose = require('mongoose');


const Organization = mongoose.Schema({
    _id: String,
    name: String,
    creator:  [{type: Schema.Types.ObjectId}],
    departments: Array
});

organizationSchema.statics.addOrganizationSchema = async function(_id, name, creator, departments) {
    let organization = new this({
        _id,
        name,
        creator,
        departments
    })
    return await organization.save();
}


module.exports = mongoose.model('Organization', organizationSchema);