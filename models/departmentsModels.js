const mongoose = require("mongoose")


// mongodb schema for array object 

const departmentsSchema = new mongoose.Schema({
    depname: {
        type: String,
        require: true
    },
    hod: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model("Departments", departmentsSchema)