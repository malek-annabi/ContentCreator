// contactController.js
// Import contact model
const mongoose = require("mongoose");
const db = require("./models");


  const createClip = function(adminId, clip) {
    return db.Clip.create(clip).then(docClip => {
      console.log("\n>> Created Clip:\n", docClip);
      return db.Admin.findByIdAndUpdate(
        adminId,
        {
          $push: {
            clips: {
              _id: docClip._id,
              name: docClip.name,
              link: docClip.link,
              description: docClip.description
            }
          }
        },
        { new: true, useFindAndModify: false }
      );
    });
  };
  admin = await createClip(admin._id, {
    name:"basti clapped",
    link: "twitch.tv/dope_usec",
    description:"double kill",
    createdAt: Date.now()
  });
  console.log("\n>> admin:\n", admin);
  admin = await createClip(admin._id, {
    name:"raggelton",
    link:"twitch.tv/raggelton",
    description:"raggelton clapped everyone",
    createdAt: Date.now()
  });
  console.log("\n>> admin:\n", admin);