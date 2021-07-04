const mongoose = require("mongoose");

// mongodb Schema for array object

const teachersSchema = new mongoose.Schema({
  staffId: { type: String, required: true, unique: true },
  tname: { type: String, require: true },
  department: { type: String, require: true },
  yearOfJoin: { type: String, require: true },
  dob: { type: String, require: true },
  sslcRegNo: { type: String, require: true },
  gender: { type: String, require: true },
  address: { type: String, require: true, min: 10 },
  pincode: { type: String, require: true, min: 6, max: 10 },
  mobile: { type: String, require: true, min: 10, max: 10 },
  email: { type: String, require: true },
});

module.exports = mongoose.model("Teacher", teachersSchema);
