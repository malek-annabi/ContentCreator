var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ContentCreator");
  dbo.createCollection("admin", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
});
  var myobj = [
    { username: 'malek',firstname: 'annabi',name: 'malek',email: 'malekannabi5@gmail.com',idnumber: '14767982',password: '', address:"7 Rue 8724"},
  ];
  dbo.collection("admin").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
      });
  });
});