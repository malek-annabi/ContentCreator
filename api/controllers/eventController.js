const Event = require("../models/Event");

// Events manegement 


//get all
exports.events_get_all = (req, res, next) => {
  Event.find()
    .select("name time description photo status link rules postedBy createdAt updatedAt")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        events: docs.map(doc => {
          return {
            name: doc.name,
            time: doc.time,
            description: doc.description,
            photo: doc.photo,
            status: doc.status,
            link: doc.link,
            rules: doc.rules,
            postedBy:doc.postedBy,
            createdAt:doc.createdAt,
            updatedAt:doc.updatedAt,
            _id: doc._id,
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

//Create
exports.events_create_event = (req, res) => {
    const event = new Event({
        name: req.body.name,
        time: req.body.time,
        description: req.body.description,
        photo: req.body.photo,
        status: req.body.status,
        link: req.body.link,
        rules: req.body.rules,
        postedBy:req.body.postedBy,
    });
    event
      .save()
      .then(result => {
        console.log(result);
        res.status(201).send(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };
//update
  exports.events_update_event = (req, res, next) => {
    const id = req.params.eventId;
    Event.findOneAndUpdate({_id: id}, {
        name: req.body.name,
        time: req.body.time,
        description: req.body.description,
        photo: req.body.photo,
        status: req.body.status,
        trailer: req.body.trailer,
        rules: req.body.rules,
        postedBy:req.body.postedBy,
    }).then(
      () => {
        res.status(201).json({
          message: 'Event updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  // delete
  exports.events_delete = (req, res, next) => {
    const id = req.params.eventId;
    Event.findOneAndUpdate({_id: id}, {status:"archived"})
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Event deleted",
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
      
  };
  exports.get_Event=(req, res, next) => {
    Event.findById(req.params.eventId)
      .exec()
      .then(event => {
        if (!event) {
          return res.status(404).json({
            message: "event not found"
          });
        }
        res.status(200).json({
          event: event,
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  };