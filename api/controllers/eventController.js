const Event = require("../models/Event");
const multer=require('multer')

const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'./uploads/')
  },
  filename:function(req,file,cb){
    cb(null,new Date().toISOString()+file.originalname)
  }
});
const uplaod=multer({storage:storage})

// Events manegement 


//get all
exports.findAllEvents = (req, res, next) => {
  Event.find()
  .then(events=> {
      res.send(events);
  }).catch(err=> {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving users."
      });
  });
};

//Create
exports.eventsCreateEvent = uplaod.single('photo'),(req, res) => {
    const event = new Event({
        name: req.body.name,
        time: req.body.time,
        description: req.body.description,
        photo: req.file.path,
        status: "active",
        link: req.body.link,
        rules: req.body.rules,
    });
    event
      .save()
      .then(result => {
        console.log(result);
        res.status(201).send(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          error: err
        });
      });
  };
//update
  exports.eventsUpdateEvent = (req, res, next) => {
    const id = req.params.id;

    Event.updateOne({_id: id}, {
        name: req.body.name,
        time: req.body.time,
        description: req.body.description,
        photo: req.file.path,  
        trailer: req.body.trailer,
        rules: req.body.rules
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
  };
  // delete
  exports.eventsDelete = (req, res, next) => {
    const id = req.params.id;
    Event.findOneAndUpdate({_id: id}, {status:"archived"})
      .exec()
      .then(result => {
        res.status(200).send({
          message: "Event deleted",
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          error: err
        });
      });
      
  };
  exports.getEvent=(req, res, next) => {
    Event.findById(req.params.id)
      .exec()
      .then(event => {
        if (!event) {
          return res.status(404).send({
            message: "event not found"
          });
        }
        res.status(200).send({
          event: event,
        });
      })
      .catch(err => {
        res.status(500).send({
          error: err
        });
      });
  };