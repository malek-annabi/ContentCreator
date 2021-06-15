// contactModel.js
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Setup schema
var adminSchema = mongoose.Schema({
    name: String,
    email: String,
    username: String,
    firstname: String,
    idnumber: Number,
    addess: String,
    password: String,
    clips: [{ type: Schema.Types.ObjectId, ref: 'clip' }]
});
// Export Contact model
var admin = module.exports = mongoose.model('admin', adminSchema);
module.exports.get = function (callback, limit) {
    admin.find(callback).limit(limit);
}