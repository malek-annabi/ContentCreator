// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var eventSchema = mongoose.Schema({
    name: String,
    time: Date,
    description: String,
    photo: String,
    status: String,
    trailerf: String,
    rules: String,
});
// Export Contact model
var event = module.exports = mongoose.model('event', adminSchema);
module.exports.get = function (callback, limit) {
    event.find(callback).limit(limit);
}