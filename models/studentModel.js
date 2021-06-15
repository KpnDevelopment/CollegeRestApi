const mongoose = require('mongoose');

// mongodb schema for json or array object

const studentSchema = new mongoose.Schema({
    admNo: { type: String, require: true },
    studentName: { type: String, require: true },
    department: { type: String, require: true },
    yearOfAdm: { type: String, require: true }

})
module.exports = mongoose.model("Student", studentSchema)