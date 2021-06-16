// contactController.js
// Import contact model
const mongoose = require("mongoose");
const db = require("./models");
const createAdmin = function(admin) {
    return db.Admin.create(admin).then(docAdmin => {
      console.log("\n>> Created Admin:\n", docAdmin);
      return docAdmin;
    });
  };
const run = async function() {
    var admin = await createAdmin({
      name: "malek",
        email: "malekannabi5@gmail.com",
        username: "malekannabi",
        firstname: "annabi",
        idnumber: "254616588",
        addess: "Tunis",
        password: "test",
    });
}