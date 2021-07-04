const mongoose = require('mongoose')

// mongodb schema for array objects in json 

const courseSchema = new mongoose.Schema({
    name: { type: String, require: true },
    noYear: { type: String, require: true },
    totalPaper: { type: String, require: true },
    description: { type: String, require: true }
})

module.exports = mongoose.model("Course", courseSchema)