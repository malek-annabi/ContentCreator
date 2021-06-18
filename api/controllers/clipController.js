const Clip = require("../models/Clip");

// Clips manegement 

//get all
exports.clips_get_all = (req, res, next) => {
  Clip.find()
    .select("name link description")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            name: doc.name,
            price: doc.link,
            productImage: doc.description,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/clips/" + doc._id
            }
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

//get a spesific clip
exports.clips_get_clip = (req, res, next) => {
  const id = req.params.clipId;
  Clip.findById(id)
    .select("name description link")
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json({
          clip: doc,
          request: {
            type: "GET",
            url: "http://localhost:3000/clips"
          }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}

//Create
exports.clips_create_clip = (req, res) => {
    const clip = new Clip({
      name: req.body.name,
      link: req.body.link,
      description: req.body.description,
      postedBy:req.body.postedBy
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







