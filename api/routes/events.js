const eventController=require('../controllers/eventController');

// routes extraction + function association for every route
module.exports=(app)=>{
    app.get('/event',eventController.findaAllEvents)
    app.get('/event/:id',eventController.getEvent)
    app.post('/event',eventController.createEvent);
    app.patch('/event/:id',eventController.updateEvent)
    app.delete('/event/:id',eventController.deleteEvent)
}