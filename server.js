const express = require("express")
const dotenv = require("dotenv")
const routers = require("./routers/index")
const connectDatabase = require("./helpers/database/connectDatabase")
const customErrorHandler = require("./middleware/errors/customErrorHandler")

// Enviroment Variables
dotenv.config({
    path:"./config/env/config.env"
})

// MongoDb Connection

connectDatabase()


// localhost:5000/api/questions
// localhost:5000/api/auth

const app = express()
const PORT = process.env.PORT;

// Routers Middleware

app.use("/api",routers)


// Error Handler

app.use(customErrorHandler);




app.listen(PORT,()=>{
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`)
})



