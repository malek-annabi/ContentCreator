const checkAuth = require("../middleware/check-auth")

// routes extraction + function association for every route
module.exports=(app)=>{
    const eventController=require('../controllers/eventController');
    app.get('/events',eventController.events_get_all)
    app.post('/events',checkAuth,eventController.events_create_event)
    app.patch('/events/:eventId',checkAuth,eventController.events_update_event)
    app.delete('/events/:eventId',checkAuth,eventController.events_delete)
}