const eventController=require('../controllers/envetController');

// routes extraction + function association for every route
module.exports=(app)=>{
    app.get('/event',eventController.findAllEvents)
    app.get('/event/:id',eventController.getEvent)
    app.post('/event',eventController.createEvent);
    app.patch('/event/:id',eventController.updateEvent)
    app.delete('/event/:id',eventController.deleteEvent)
}