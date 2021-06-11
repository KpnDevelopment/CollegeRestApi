const express = require('express');
const router = express.Router();
const Teachers = require("../models/teachersModel")

// getting all

router.get('/', async (req, res) => {
    try {
        const teachers = await Teachers.find()
        res.json(teachers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// creating One

router.post("/", async (req, res) => {
    const teachers = new Teachers({
        tname: req.body.tname,
        department: req.body.department

    })
    try {
        const newTeacher = await teachers.save()
        res.status(201).json(newTeacher)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


// sorting One

router.get('/:id', getTeachers, async (req, res) => {
    res.json(res.teachers)
})


// updating One

router.patch('/:id', getTeachers, async (req, res) => {
    if (req.body.tname != null) {
        res.teachers.tname = req.body.tname
    }
    if (req.body.department != null) {
        res.teachers.department = req.body.department
    }
    try {
        const updatedTeacher = await res.teachers.save()
        res.json(updatedTeacher)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


// Delete One

router.delete('/:id', getTeachers, async (req, res) => {
    try {
        await res.teachers.remove()
        res.json({ message: "deleted teacher" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// medileware 

async function getTeachers(req, res, next) {
    let teachers
    try {
        teachers = await Teachers.findById(req.params.id)
        if (teachers == null) {
            return res.status(404).json({ message: "cannot find teacher" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.teachers = teachers
    next()
}

module.exports = router