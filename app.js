const express = require("express");
var artPages = require("./src/routes/artPages");
var userRoute = require("./src/routes/userRoute");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//Database Connection
mongoose.connect("mongodb+srv://Szafira:usreuMJM4SUhK7to@portfoliocluster.lulnj.mongodb.net/adminDatabase")
const app = express();
const db = mongoose.connection;
db.on("error", (err)=>{console.error(err)})
db.once("open", () => {console.log("Połączenie zakończone sukcesem")})

app.use('/static', express.static('public'));
app.use(bodyParser.json());


app.use((req, res, next) => {
res.status(200).json({wiadomosc: "Nie znalezione"});
});

module.exports = app;
