// contactModel.js
var mongoose = require('mongoose');
const Admin = mongoose.model(
    "Admin",
    new mongoose.Schema({
        name: String,
        email: String,
        username: String,
        firstname: String,
        idnumber: Number,
        addess: String,
        password: String,
        clips: []
    })
  );
  //admin model Extraction
  module.exports = Admin;