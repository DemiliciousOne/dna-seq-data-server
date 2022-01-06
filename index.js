var express = require("express");
var app = express();
const fs = require('fs');
var cors = require("cors");

app.use(cors());
app.set("views", "views");
app.set("view engine", "pug");
app.set("json spaces", 2);

app.get('/data', function(req, res) {
    fs.readFile('counts.json', 'utf8', (err, data) => {  // data must be called counts.json in the same directory
        obj = JSON.parse(data);
        res.json(obj);
    })
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
});