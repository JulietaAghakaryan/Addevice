var express = require('express');
var app = express();

var route = require('./route.js');

app.use('/route', route);


app.get('/', function(req, res){
    res.send("Hello world!");
 });
 
 app.listen(3000);