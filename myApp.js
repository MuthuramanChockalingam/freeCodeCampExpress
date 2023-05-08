let express = require('express');
let app = express();
let process = require('dotenv').config();

app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.get('/json', (req, res) => process.env.MESSAGE_STYLE === uppercase
    ? res.json({"message": "Hello json"}).toUpperCase()
    : res.json({"message": "Hello json"})
);































 module.exports = app;
