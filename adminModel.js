// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var adminSchema = mongoose.Schema({
    name: String,
    email: String,
    username: String,
    firstname: String,
    idnumber: Number,
    addess: String,
    password: String,
});
// Export Contact model
var admin = module.exports = mongoose.model('admin', adminSchema);
module.exports.get = function (callback, limit) {
    admin.find(callback).limit(limit);
}