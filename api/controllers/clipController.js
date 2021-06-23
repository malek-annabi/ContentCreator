const Clip = require("../models/Clip");

// Clips manegement 

//get all
exports.clips_get_all = (req, res, next) => {
  Clip.find()
    .select("name link description status createdAt updatedAt")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        clips: docs.map(doc => {
          return {
            name: doc.name,
            link: doc.link,
            description: doc.description,
            status:doc.status,
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
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
exports.clips_create_clip = (req, res) => {
    const clip = new Clip({
      name: req.body.name,
      link: req.body.link,
      description: req.body.description,
      postedBy:req.body.postedBy,
      status:'active'
    });
    clip
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
  exports.clips_update_clip = (req, res, next) => {
    const id = req.params.clipId;
    Clip.findOneAndUpdate({_id: id}, {
      name: req.body.name,
      description: req.body.description,
      link: req.body.link,
      postedBy: req.body.postedBy,
    }).then(
      () => {
        res.status(201).json({
          message: 'Clip updated successfully!'
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
//delete
  exports.clips_delete = (req, res, next) => {
    const id = req.params.clipId;
    console.log(id)
    Clip.findOneAndUpdate({_id: id}, {status:"archived"})
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Clip deleted",
          request: {
            type: "POST",
            url: "http://localhost:3000/clips",
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };
  exports.get_Clip=(req, res, next) => {
    Clip.findById(req.params.clipId)
      .exec()
      .then(clip => {
        if (!clip) {
          return res.status(404).json({
            message: "clip not found"
          });
        }
        res.status(200).json({
          clip: clip,
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  };







