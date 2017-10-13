var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955');

var PersonSchema = new mongoose.Schema({
    name: String
})
mongoose.model('Person', PersonSchema);
var Person = mongoose.model('Person');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var path = require('path');

// Routes
app.get('/', function(req, res){
    Person.find({}, function(err, persons){
        res.json(persons);
    })
})
app.get('/new/:name', function(req, res){
    newPerson = new Person({"name": req.params.name});
    newPerson.save(function(err){
        res.redirect('/');
    })
})
app.get('/remove/:name', function(req, res){
    Person.remove({"name": req.params.name}, function(err){
        res.redirect('/');
    });
})
app.get('/:name', function(req, res){
    Person.findOne({'name': req.params.name}, function(err, person){
        res.json(person);
    });
    
})

// Setting server to listen on port 8000
app.listen(8000, function(){
    console.log("Listening on port 8000");
});
