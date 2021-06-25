const clipController=require('../controllers/clipController');

// routes extraction + function association for every route
module.exports=(app)=>{
    app.get('/clip',clipController.findAllClips);
    app.get('/clip/:id',clipController.getClip);
    app.post('/clip',clipController.createClip);
    app.patch('/clip/:id',clipController.updateClip)
    app.delete('/clip/:id',clipController.deleteClip)
}