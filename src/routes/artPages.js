

const express = require("express");
const mongoose = require("mongoose");
const { routes } = require("../../app");
const User = require('../models/user')
var router = express.Router();

//Home page
router.get('/', function (req,res){
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//About page


module.exports = router;