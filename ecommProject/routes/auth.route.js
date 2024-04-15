/**
 * POST localhost:8080/ecomm/api/v1/auth/signup
 * 
 * I need to intercept this
 */

const authController = require("../controllers/auth.controller")
const authMW = require("../middlewares/auth_mw")

module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/signup",[authMW.verifySignUpBody], authController.signup)  // handover to the right controller
}