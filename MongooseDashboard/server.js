var express = require("express");

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dashboard');

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

var path = require("path");

app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', "ejs");

require('./server/config/mongoose.js');


var routes_setter = require('./server/config/routes.js');
routes_setter(app);


//Setting server to Listen
app.listen(8000, function(){
    console.log("Listening on port 8000");
});
