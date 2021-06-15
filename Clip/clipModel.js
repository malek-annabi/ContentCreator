// contactModel.js
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Setup schema
var clipSchema = mongoose.Schema({
    name: String,
    link: String,
    description: String,
    admin: { type: Schema.Types.ObjectId, ref: 'admin' },
});
// Export Contact model
var clip = module.exports = mongoose.model('clip', clipSchema);
module.exports.get = function (callback, limit) {
    clip.find(callback).limit(limit);
}