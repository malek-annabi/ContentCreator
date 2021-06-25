// mongoose
const mongoose = require('mongoose');

//schema
const clipSchema = mongoose.Schema({
  name: String,
  link: String,
  description: String,
  status:String,
  postedBy:String
},
{
  timestamps:true
});


// Clip model extraction
module.exports = mongoose.model('Clip',clipSchema);