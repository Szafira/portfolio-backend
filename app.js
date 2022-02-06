const express = require("express");
var artPages = require("./src/routes/artPages");
const mongoose = require("mongoose");
//Art folder
app.use("src/art",express.static("art"));
mongoose.connect("mongodb+srv://Szafira:usreuMJM4SUhK7to@portfoliocluster.lulnj.mongodb.net/test")
const app = express();

app.use('/static', express.static('public'));

app.use('/', artPages);

app.use((req, res, next) => {
res.status(200).json({wiadomosc: "Nie znalezione"});
});

module.exports = app;
