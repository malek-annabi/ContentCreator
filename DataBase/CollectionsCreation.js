var dbo = db.db("ContentCreator");
  dbo.createCollection("admin", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
});
