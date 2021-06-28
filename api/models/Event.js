// mongoose
var mongoose = require('mongoose');


//schema
const eventSchema = mongoose.Schema({
        name: String,
        time: Date,
        description: String,
        photo: String,
        status: String,
        link: String,
        rules: String,
        postedBy:String
    },
    {
        timestamps:true
      })
    ;

    
//Event model Extraction
module.exports = mongoose.model('Event',eventSchema);