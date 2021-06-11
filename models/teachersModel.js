const mongoose = require('mongoose');

// mongodb Schema for array object

const teachersSchema = new mongoose.Schema({
    tname: { type: String, require: true },
    department: { type: String, require: true }
})

module.exports = mongoose.model("Teacher", teachersSchema)