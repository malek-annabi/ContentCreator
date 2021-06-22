// express
const express =require("express");
const cors = require('cors')

const app =express();
app.use(cors())


require("dotenv").config();

//mongoose
const mongoose = require("mongoose");

// Configure bodyparser 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
   res.setHeader('Access-Control-Allow-Origin','*');
   res.setHeader('Content-Type','appliaction/json; charset=utf-8');
   res.setHeader('Access-Control-Allow-Methods','GET , POST , OPTIONS , PUT , PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers','X-Request-With,authorization,content-type');
   res.setHeader('Access-Control-Allow-Credentials',true);
   next();
})

// database conenction 
mongoose
.connect("mongodb://localhost/ContentCreator", {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));

//app.get('/',(req,res) =>{
// res.json({ "message": "welcome malek"})
//})

// routes imports
require('./api/routes/clips')(app);
require('./api/routes/events')(app);
require('./api/routes/users')(app);

// server start
 app.listen(3001,() =>{
     console.log( "hello malek")
 })
