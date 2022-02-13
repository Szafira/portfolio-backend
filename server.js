
const userRoute = require('./src/routes/userRoute');
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const port = 8080;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://Szafira:usreuMJM4SUhK7to@portfoliocluster.lulnj.mongodb.net/AdminDatabase")
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("Połączono!");
})

app.use('/account', userRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
   
}
);