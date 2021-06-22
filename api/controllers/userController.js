const User = require("../models/User");
const jwt=require('jsonwebtoken')
const bcrypt = require("bcrypt");
require("dotenv").config();

// Users manegement 

//Create
exports.user_signup = (req, res, next) => {
    User.find({ username: req.body.username })
      .exec()
      .then(user => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "username exists"
          });
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err
              });
            } else {
              const user = new User({
                username: req.body.username,
                name:req.body.name,
                firstname:req.body.firstname,
                address:req.body.address,
                idnumber:req.body.idnumber,
                email:req.body.email,
                password: hash
              });
              user
                .save()
                .then(result => {
                  console.log(result);
                  res.status(201).json({
                    message: "User created"
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                  });
                });
            }
          });
        }
      });
  };
//login
  exports.user_login = (req, res, next) => {
    User.find({ username: req.body.username })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Auth failed"
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                username: user[0].username,
                userId: user[0]._id
              },
              process.env.JWT_KEY,
              {
                expiresIn: "4h"
              }
            );
            return res.status(200).json({
              message: "Auth successful",
              token: token,
              username: user[0].username,
                _Id: user[0]._id
            });
          }
          res.status(401).json({
            message: "Auth failed"
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };