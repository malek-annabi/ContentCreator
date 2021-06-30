const eventController=require('../controllers/eventController')

// routes extraction + function association for every route
module.exports=(app)=>{
    app.get('/event',eventController.findAllEvents);
    app.get('/event/:id',eventController.getEvent);
    app.post('/event',eventController.eventsCreateEvent);
    app.patch('/event/:id',eventController.eventsUpdateEvent);
    app.delete('/event/:id',eventController.eventsDelete);
}