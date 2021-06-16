const express=require('express');
const app=express();
const clipRoutes = require('./api/routes/clips');
app.use('/clips',clipRoutes);
module.exports=app; 