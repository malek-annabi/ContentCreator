// contactModel.js
var mongoose = require('mongoose');
//schema
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name: String,
        firstname: String,
        username: String,
        email: String,
        password: String,
        idnumber: String,
        address: String,
    },
    {
        timestamps:true
      })
    );
  //Admin model Extraction
  module.exports = User;