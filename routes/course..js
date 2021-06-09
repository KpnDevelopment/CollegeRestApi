const express = require("express")
const router = express.Router()
const Course = require('../models/courseModel')


// get all

router.get('/', async (req, res) => {
    try {
        const course = await Course.find()
        res.json

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// get one

router.get('/:id', async (req, res) => {
    try {


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// create one

router.post('/', async (req, res) => {
    const course = new Course({
        name: req.body.name,
        noyear: req.body.noyear
    })
    try {
        const newCourse = await course.save

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// update one
router.patch('/:id', async (req, res) => {
    try {


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// delete One
router.delete('/:id', async (req, res) => {
    try {


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// midileWare

async function getCourse(req, res, next) {

    try {
        course = await Course.findByid(req.params.id)
        if (course == null) {
            return res.status(404).json({ message: "cannot find course" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.course = course
    next()
}
module.exports = router