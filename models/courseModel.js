const mongoose = require('mongoose')

// mongodb schema for array objects in json 

const courseSchema = new mongoose.Schema({
    name: { type: String, require: true },
    noyear: { type: String, require: true }
})

module.exports = mongoose.model("Course", courseSchema)