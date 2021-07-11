const express =require("express");
const cors = require('cors');
const app =express();

//cors
app.use(cors());
//.env
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
.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:true
  })
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));


// routes imports
require('./api/routes/clips')(app);
require('./api/routes/upload')(app);
require('./api/routes/events')(app);
require('./api/routes/users')(app);

// server start
 app.listen(process.env.PORT || 3500,() =>{
     console.log( "port "+process.env.PORT+" hello malek");
 })