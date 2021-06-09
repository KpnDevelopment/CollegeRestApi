const { Mongoose } = require("mongoose");

// monogo schema for array object in json

const courseSchema = new Mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    noyear: {
        type: String,
        require: true
    }
})

module.exports = Mongoose.model("Course", courseSchema)