const express = require("express");
const mongoose = require("mongoose");
const User = require('../models/user');
const router = express.Router();

router.post("/login",(req, res) => {
    User.findOne().where({username: req.body.username, password: req.body.password})
    .then(users => 
      {
      if(users == null)
      { res.json("Błędny login lub hasło!")
      } else {
        res.json(users.id)
      }
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  


router.post("/register",(req, res) => {
  
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
     });
     User.init();
    newUser.save()
     .then(() => res.json('User added!'))
  
  .catch(err => res.status(500).json('Error: ' + err));
  
  });
module.exports = router;

router.put("/update",(req, res) => {
  User.findOneAndUpdate().where({username: req.body.username}, {$set: { "password": req.body.password }},{upsert: true, returnDocument: 'after'})
    .then(users => {
      res.json(users.password)})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete("/delete",(req, res) => {
  User.findOneAndRemove().where({username: req.body.username, password: req.body.password})
  .then(users => {
    if(users !=null){
    res.json("Udane!") 
    }else{ 
    res.json("Nieudane!")
    }
  })
    .catch(err => res.status(400).json('Error: ' + err));
  })