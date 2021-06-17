const checkAuth = require("../middleware/check-auth")

// user login + signin routes
module.exports=(app)=>{
    const userController=require('../controllers/userController');
    app.post('/login',userController.user_login)
    app.post('/signup',userController.user_signup)
}