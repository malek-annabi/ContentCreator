const Clip=require('../models/Clip')




exports.createClip=(req,res,next)=>{
    const clip = new Clip({
        name: req.body.name,
        link: req.body.link,
        description:req.body.description,
        postedBy:req.body.postedBy,
        status:"active"
    });
// Save User in the database
    clip.save()
    .then(data=> {
        res.send({
            status:'200',
            message:"the new clip",data
        });
    }).catch(err=> {
        res.status(500).send({
            message: err.message ||  "Some error occurred while creating the User."
    });
    });
};

exports.findAllClips= (req,res) => {
    Clip.find()
    .then(clips=> {
        res.send(clips);
    }).catch(err=> {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.getClip=(req,res,next)=>{
    const id = req.params.id;
    Clip.findOne({ '_id': id })
    .then(clip=> {
        res.send({
            status:'200',
            message:
            "Clip",clip
        });
    }).catch(err=> {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Clip."
        });
    });
}


exports.updateClip=(req,res,next)=>{
    const id = req.params.id;
    Clip.findOneAndUpdate({_id: id}, {
      name: req.body.name,
      description: req.body.description,
      link: req.body.link,
    }).then(
      () => {
        res.status(201).send({
          message: 'Clip updated successfully!'
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


exports.deleteClip=(req,res,next)=>{
    const id = req.params.id;
    Clip.findOneAndUpdate({_id: id}, {status:"archived"})
      .exec()
      .then(result => {
        res.status(200).send({
          message: "Clip deleted",
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          error: err
        });
      });
}