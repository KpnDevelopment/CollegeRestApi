const mongoose = require("mongoose");

// mongodb schema for json or array object

const studentSchema = new mongoose.Schema({
  admNo: { type: String, require: true, unique: true },
  studentName: { type: String, require: true },
  department: { type: String, require: true },
  yearOfAdm: { type: String, require: true },
  dob: { type: String, require: true },
  sslcRegNo: { type: String, require: true },
  gender: { type: String, require: true },
  fatherName: { type: String, require: true },
  address: { type: String, require: true, min: 10 },
  pincode: { type: String, require: true, min: 6, max: 10 },
  mobile: { type: String, require: true, min: 10, max: 10 },
  email: { type: String, require: true },
});
module.exports = mongoose.model("Student", studentSchema);
