const express = require("express")
const dotenv = require("dotenv")
const questions = require("./routers/question")
const auth = require("./routers/auth")


// Enviroment Variables
dotenv.config({
    path:"./config/env/config.env"
})

// localhost:5000/api/questions
// localhost:5000/api/auth

const app = express()
const PORT = process.env.PORT;

// Routers Middleware

app.use("/api/questions",questions)
app.use("/api/auth",auth)




app.listen(PORT,()=>{
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`)
})



