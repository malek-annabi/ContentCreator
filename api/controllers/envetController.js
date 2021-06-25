const Event=require('../models/Event')




exports.createEvent=(req,res,next)=>{
    const event = new Event({
        name: req.body.name,
        time: req.body.time,
        description: req.body.description,
        photo: req.body.photo,
        link: req.body.link,
        rules: req.body.rules,
        status:"active",
    });
// Save User in the database
    event.save()
    .then(data=> {
        res.send({
            status:'200',
            message:"the new event",data
        });
    }).catch(err=> {
        res.status(500).send({
            message: err.message ||  "Some error occurred while creating the User."
    });
    });
};

exports.findAllEvents= (req,res) => {
    Event.find()
    .then(events=> {
        res.send({
            status:'200',
            message:
            "All the users",events
        });
    }).catch(err=> {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.getEvent=(req,res,next)=>{
  const id = req.params.id;
  Event.findOne({ '_id': id })
  .then(event=> {
      res.send({
          status:'200',
          message:
          "Event",event
      });
  }).catch(err=> {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving Clip."
      });
  });
}


exports.updateEvent=(req,res,next)=>{
    const id = req.params.id;
    Event.findOneAndUpdate({_id: id}, {
      name: req.body.name,
      description: req.body.description,
      link: req.body.link,
      photo: req.body.photo,
      rules: req.body.rules,
    }).then(
      () => {
        res.status(201).send({
          message: 'Event updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).send({
          error: error
        });
      }
    );
}


exports.deleteEvent=(req,res,next)=>{
    const id = req.params.id;
    Event.findOneAndUpdate({_id: id}, {
        status:"archived"
    }).then(
      () => {
        res.status(201).send({
          message: 'Event deleted successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).send({
          error: error
        });
      }
    );
}