const express = require("express")
const {register,tokentest} = require("../controllers/auth")
const {getAccessToRoute} = require("../middleware/authorization/auth")
// api/auth
// api/auth/register

const router = express.Router()

router.post("/register",register)
router.get("/tokentest",getAccessToRoute,tokentest)


module.exports = router;