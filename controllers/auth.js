const User = require("../models/User")
const CustomError = require("../helpers/error/CustomError")
const asyncErrorWrapper = require("express-async-handler")


const register = asyncErrorWrapper(async (req, res, next) => {
    // POST DATA

    const {name,email,password,role} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        role
    });

    res
        .status(200)
        .json({
            success: true,
            data: user
        })
})

const errorTest = (req, res, next) => {
    // Some Code

    // Question Does Not Exist
    return next(new TypeError("Type Error"))


    return next(new Error("Bi Hata Oluştu - Auth"))
    // Some Code



}




module.exports = {
    register,
    errorTest
};