// contactModel.js
var mongoose = require('mongoose');
const Clip = mongoose.model(
    "Clip",
    new mongoose.Schema({
        name: String,
        link: String,
        description: String,
        createdAt: Date
    })
  );
  //admin model Extraction
  module.exports = Clip;