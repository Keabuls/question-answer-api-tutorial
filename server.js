const express = require("express")

const app = express()

const PORT = 5000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Àpp Started on ${PORT}`)
})



