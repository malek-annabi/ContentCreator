// contactModel.js
var mongoose = require('mongoose');
//schema
const Event = mongoose.model(
    "Event",
    new mongoose.Schema({
        name: String,
        time: String,
        description: String,
        photo: String,
        status: String,
        trailer: String,
        rules: String,
        postedBy:String
    },
    {
        timestamps:true
      })
    );
  //Event model Extraction
  module.exports = Event;