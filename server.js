require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()


// database connection

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection
db.on("error", (error) => console.log(error))
db.once("open", () => console.log("Database Connected"))

// routes
app.use(express.json())


const courseRouter = require('./routes/course')
app.use('/course', courseRouter)


// port config
app.listen(4000, () => console.log("server started"))