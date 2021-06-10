require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")



// database connection codes

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log("db Connected"))


// routes
app.use(express.json())

// Course Router

const CourseRouter = require('./routes/courses')
app.use('/courses', CourseRouter)

// Department Router

const DepartmentsRouter = require('./routes/departments')
app.use('/departments', DepartmentsRouter)



// port config in localhost
app.listen(5000, () => console.log("server started"))