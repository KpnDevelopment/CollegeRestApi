const express = require("express");
const router = express.Router();
const Departments = require("../models/departmentsModels");

// getting all
router.get("/", async (req, res) => {
  try {
    const departments = await Departments.find();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//  creating one

router.post("/", async (req, res) => {
  const departments = new Departments({
    depname: req.body.depname,
    hod: req.body.hod,
  });
  try {
    const newDepartments = await departments.save();
    res.status(201).json(newDepartments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// getting one

router.get("/:id", getDepartments, async (req, res) => {
  res.json(res.departments);
});

// updating one Departments

router.put("/:id", getDepartments, async (req, res) => {
  if (req.body.depname != null) {
    res.departments.depname = req.body.depname;
  }
  if (req.body.hod != null) {
    res.departments.hod = req.body.hod;
  }
  try {
    const updatedDepartments = await res.departments.save();
    res.json(updatedDepartments);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//deleting One

router.delete("/:id", getDepartments, async (req, res) => {
  try {
    await res.departments.remove();
    res.json({ message: "deleted departments" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// medileware

async function getDepartments(req, res, next) {
  let departments;
  try {
    departments = await Departments.findById(req.params.id);
    if (departments == null) {
      return res.status(404).json({ message: "cannot find course" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.departments = departments;
  next();
}
module.exports = router;
