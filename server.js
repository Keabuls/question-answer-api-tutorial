const express = require("express")
const dotenv = require("dotenv")
const questions = require("./routers/question")
const auth = require("./routers/auth")
const routers = require("./routers/index")


// Enviroment Variables
dotenv.config({
    path:"./config/env/config.env"
})

// localhost:5000/api/questions
// localhost:5000/api/auth

const app = express()
const PORT = process.env.PORT;

// Routers Middleware

app.use("/api",routers)




app.listen(PORT,()=>{
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`)
})



