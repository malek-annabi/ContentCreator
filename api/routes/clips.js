
const checkAuth = require("../middleware/check-auth")

// routes extraction + function association for every route
module.exports=(app)=>{
    const clipController=require('../controllers/clipController');
    app.get('/',clipController.clips_get_all)
    app.post('/',checkAuth,clipController.clips_create_clip)
    app.patch('/:clipId',checkAuth,clipController.clips_update_clip)
}