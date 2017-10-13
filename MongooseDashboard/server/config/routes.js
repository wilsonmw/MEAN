var mongoose = require('mongoose');

var Dragon = mongoose.model("Dragon");

var dragons = require('../controllers/dragons.js');
module.exports = function(app){
    //Routes
    app.get('/', function(req, res){
        dragons.show(req, res);
    })

    app.get('/dragons/new', function(req, res){
        res.render("newDragon.ejs");
    })

    app.post('/dragons', function(req, res){
        dragons.create(req, res)
    })

    app.get('/dragons/:id', function(req, res){
        dragons.getOne(req, res);
    })

    app.get('/dragons/destroy/:id', function(req, res){
        dragons.destroy(req, res);
    })

    app.get('/dragons/edit/:id', function(req, res){
        dragons.edit(req, res);
    })

    app.post('/dragons/:id', function(req, res){
        dragons.update(req, res);
    })
}