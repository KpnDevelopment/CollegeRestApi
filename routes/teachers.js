const express = require("express");
const router = express.Router();
const Teachers = require("../models/teachersModel");

// getting all

router.get("/", async (req, res) => {
  try {
    const teachers = await Teachers.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// creating One

router.post("/", async (req, res) => {
  const teachers = new Teachers({
    staffId: req.body.staffId,
    tname: req.body.tname,
    department: req.body.department,
    yearOfJoin: req.body.yearOfJoin,
    dob: req.body.dob,
    sslcRegNo: req.body.sslcRegNo,
    gender: req.body.gender,
    address: req.body.address,
    pincode: req.body.pincode,
    mobile: req.body.mobile,
    email: req.body.email,
  });
  try {
    let teacherIds = await Teachers.findOne({ staffId: req.body.staffId });
    if (teacherIds) {
      res.status(400).json({ message: "serialNo exist" });
    } else {
      const newTeacher = await teachers.save();
      res.status(201).json(newTeacher);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// sorting One

router.get("/:id", getTeachers, async (req, res) => {
  res.json(res.teachers);
});

// updating One

router.put("/:id", getTeachers, async (req, res) => {
  if (req.body.staffId != null) {
    res.teachers.staffId = req.body.staffId;
  }
  if (req.body.tname != null) {
    res.teachers.tname = req.body.tname;
  }
  if (req.body.department != null) {
    res.teachers.department = req.body.department;
  }
  if (req.body.yearOfJoin != null) {
    res.teachers.yearOfJoin = req.body.yearOfJoin;
  }
  if (req.body.dob != null) {
    res.teachers.dob = req.body.dob;
  }
  if (req.body.sslcRegNo != null) {
    res.teachers.sslcRegNo = req.body.sslcRegNo;
  }
  if (req.body.gender != null) {
    res.teachers.gender = req.body.gender;
  }

  if (req.body.address != null) {
    res.teachers.address = req.body.address;
  }
  if (req.body.pincode != null) {
    res.teachers.pincode = req.body.pincode;
  }
  if (req.body.mobile != null) {
    res.teachers.mobile = req.body.mobile;
  }
  if (req.body.email != null) {
    res.teachers.email = req.body.email;
  }
  try {
    const updatedTeacher = await res.teachers.save();
    res.json(updatedTeacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete One

router.delete("/:id", getTeachers, async (req, res) => {
  try {
    await res.teachers.remove();
    res.json({ message: "deleted teacher" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// medileware

async function getTeachers(req, res, next) {
  let teachers;
  try {
    teachers = await Teachers.findById(req.params.id);
    if (teachers == null) {
      return res.status(404).json({ message: "cannot find teacher" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.teachers = teachers;
  next();
}

module.exports = router;
