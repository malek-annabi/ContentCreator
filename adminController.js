// contactController.js
// Import contact model
admin = require('./adminModel');
// Handle index actions
exports.index = function (req, res) {
    admin.get(function (err, admins) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "admins retrieved successfully",
            data: admins
        });
    });
};
// Handle create admin actions
exports.new = function (req, res) {
    admin=new admin();
    admin.name = req.body.name; 
    admin.firstname = req.body.firstname;
    admin.address = req.body.address;
    admin.email = req.body.email;
    admin.idnumber = req.body.idnumber;
    admin.username = req.body.username;
    admin.password = req.body.password;
// save the admin and check for errors
    admin.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New admin created!',
            data: admin
        });
    });
};
// Handle view admin info
exports.view = function (req, res) {
    admin.findById(req.params.admin_id, function (err, admin) {
        if (err)
            res.send(err);
        res.json({
            message: 'admin details loading..',
            data: admin
        });
    });
};
// Handle update admin info
exports.update = function (req, res) {
admin.findById(req.params.admin_id, function (err, admin) {
        if (err)
            res.send(err);
        admin.name = req.body.name;
        admin.gender = req.body.gender;
        admin.email = req.body.email;
        admin.phone = req.body.phone;
// save the admin and check for errors
        admin.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'admin Info updated',
                data: admin
            });
        });
    });
};
// Handle delete admin
exports.delete = function (req, res) {
    admin.remove({
        _id: req.params.admin_id
    }, function (err, admin) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            admmin: 'admin deleted'
        });
    });
};