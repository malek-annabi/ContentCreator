const Event = require("../models/Event");

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
exports.eventsCreateEvent = (req, res) => {
    const event = new Event({
        name: req.body.name,
        time: req.body.time,
        description: req.body.description,
        photo: req.body.photo,
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
    const id = req.params.eventId;

    console.log(id," ",req.body)

    Event.updateOne({_id: id}, {
        name: req.body.name,
        time: req.body.time,
        description: req.body.description,
        photo: req.body.photo,  
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
    const id = req.params.eventId;
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
    Event.findById(req.params.eventId)
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