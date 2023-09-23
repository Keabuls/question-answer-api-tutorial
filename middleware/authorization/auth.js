const CustomError = require("../../helpers/error/CustomError")
const jwt = require("jsonwebtoken")
const {isTokenIncluded,getAccessTokenFromHeader} = require("../../helpers/authorization/TokenHelpers")
const getAccessToRoute = (req,res,next) => {

// Token
const {JWT_SECRET} = process.env

if(!isTokenIncluded(req)){
    // 401 , 403
    // 401 Unauthorized
    // 403 Forbidden

    return next(new CustomError("You Aare not authorized to access this route",401))
}
const accessToken = getAccessTokenFromHeader(req)

jwt.verify(accessToken,JWT_SECRET,(err,decoded)=>{

    if (err) {

        return next(new CustomError("You AAare not authorized to access this route",401))
    }
    console.log(decoded)
    next();

})
// CustomError



};
module.exports = {
    getAccessToRoute,

}