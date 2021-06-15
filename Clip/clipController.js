clip = require('./clipModel');
// Handle index actions
exports.index = function (req, res) {
    clip.get(function (err, clips) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "clips retrieved successfully",
            data: clips
        });
    });
};
// Handle create clip actions
exports.new = function (req, res) {
    clip=new clip();
    clip.name = req.body.name; 
    clip.description = req.body.description;
    clip.link=req.body.link;
    clip.admin=req.body.admin;
// save the admin and check for errors
    clip.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New admin created!',
            data: clip
        });
    });
};
// Handle view admin info
exports.view = function (req, res) {
    clip.findById(req.params.clip_id, function (err, clip) {
        if (err)
            res.send(err);
        res.json({
            message: 'admin details loading..',
            data: clip
        });
    });
};
// Handle update admin info
exports.update = function (req, res) {
clip.findById(req.params.clip_id, function (err, admin) {
        if (err)
            res.send(err);
        clip.name = req.body.name;
        clip.link = req.body.link;
        clip.description = req.body.description;
        clip.admin = req.body.admin;
// save the admin and check for errors
        clip.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'admin Info updated',
                data: clip
            });
        });
    });
};
// Handle delete admin
exports.delete = function (req, res) {
    clip.remove({
        _id: req.params.clip_id
    }, function (err, admin) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            clip: 'clip deleted'
        });
    });
};