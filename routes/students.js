const express = require('express');
const { syncIndexes } = require('../models/studentModel');
const router = express.Router();
const Students = require('../models/studentModel');


// getting all

router.get('/', async (req, res) => {
    try {
        const students = await Students.find()
        res.json(students)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// creating one
router.post('/', async (req, res) => {
    const students = new Students({
        admNo: req.body.admNo,
        studentName: req.body.studentName,
        department: req.body.department,
        yearOfAdm: req.body.yearOfAdm

    })
    try {
        const newStudent = await students.save()
        res.status(201).json(newStudent)
    } catch (error) {

        res.status(400).json({ message: error.message })
    }
})


// Sorting One

router.get('/:id', getStudents, (req, res) => {
    res.json(res.students)
})

// updating One

router.patch('/:id', getStudents, async (req, res) => {
    if (req.body.admNo != null) {
        res.students.admNo = req.body.admNo
    }
    if (req.body.studentName != null) {
        res.students.studentName = req.body.studentName
    }
    if (req.body.department != null) {
        res.students.department = req.body.department
    }
    if (req.body.yearOfAdm != null) {
        res.students.yearOfAdm = req.body.yearOfAdm
    }
    try {
        const updatedStudent = await res.students.save()
        res.json(updatedStudent)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


// Deleting One 

router.delete('/:id', getStudents, async (req, res) => {
    try {
        await res.students.remove()
        res.json({ message: "deleted student" })

    } catch (error) {
        res.status(500).json({ Message: error.message })
    }
})



// Medileware
async function getStudents(req, res, next) {
    let students
    try {
        students = await Students.findById(req.params.id)
        if (students == null) {
            return res.status(404).json({ message: "cannot find students" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.students = students
    next()
}



module.exports = router