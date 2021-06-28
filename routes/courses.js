const express = require("express")
const router = express.Router()
const Course = require('../models/courseModel')

// Getting All

router.get('/', async (req, res) => {
    try {
        const course = await Course.find()
        res.json(course)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})

//  Getting  One


router.get('/:id', getCourse, (req, res) => {

    res.json(res.course)

})

// Creating One



router.post('/', async (req, res) => {

    const course = new Course({
        name: req.body.name,
        noYear: req.body.noYear,
        totalPaper: req.body.totalPaper,
        description: req.body.description,

    })
    try {
        const newCourse = await course.save()
        res.status(201).json(newCourse)
    } catch (error) {

        res.status(400).json({ message: error.message })
        // res.json({ message: "error unde" })

    }

})
// Updating One



router.put('/:id', getCourse, async (req, res) => {
    if (req.body.name != null) {
        res.course.name = req.body.name
    }
    if (req.body.noYear != null) {
        res.course.noYear = req.body.noYear
    }
    if (req.body.totalPaper != null) {
        res.course.totalPaper = req.body.totalPaper
    }
    if (req.body.description != null) {
        res.course.description = req.body.description
    }
    try {
        const updatedCourse = await res.course.save()
        res.json(updatedCourse)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
// Deleting One


router.delete('/:id', getCourse, async (req, res) => {
    try {
        await res.course.remove()
        res.json({ message: "deleted course" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// medileware 

async function getCourse(req, res, next) {
    let course
    try {
        course = await Course.findById(req.params.id)
        if (course == null) {
            return res.status(404).json({ message: "cannot find course" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.course = course
    next()
}
module.exports = router