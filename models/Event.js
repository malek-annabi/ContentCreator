// contactModel.js
var mongoose = require('mongoose');
const Event = mongoose.model(
    "Event",
    new mongoose.Schema({
        name: String,
        time: Date,
        description: String,
        photo: String,
        status: String,
        trailer: String,
        rules: String,
    })
  );
  //admin model Extraction
  module.exports = Event;