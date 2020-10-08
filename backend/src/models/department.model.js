const mongoose = require('mongoose');


const department = mongoose.Schema({
    _id: String,
    name: String,
    head: Array,
    workers: Array,
    videoConf: String
});

departmentSchema.statics.addDepartment = async function(_id, name, head, workers, videoConf) {
    let department = new this({
        _id,
        name,
        head,
        workers,
        videoConf
    })
    return await department.save();
}


module.exports = mongoose.model('department', departmentSchema);
