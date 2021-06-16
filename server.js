const http=require("http");
const app =require("./app");
const port=process.env.port || 3000;
const server=http.createServer(app);
const mongoose = require("mongoose");
server.listen(port);
mongoose
.connect("mongodb://localhost/ContentCreator", {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));