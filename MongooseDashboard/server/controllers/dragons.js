var mongoose = require('mongoose');
var Dragon = mongoose.model('Dragon');
module.exports = {
    show: function(req, res){
        dragons = Dragon.find({}, function(err, dragons){
            res.render('index.ejs', {dragons});
        })
    },
    create: function(req, res){
        var dragon = new Dragon({name: req.body.name, age: req.body.age, size: req.body.size, fire: req.body.fire, faveFood: req.body.faveFood});
        dragon.save(function(err){
            res.redirect('/');
        })
    },
    getOne: function(req, res){
        dragon = Dragon.find({_id: req.params.id}, function(err, dragon){
            res.render("singleDragon.ejs", {dragon});
        });
    },
    destroy: function(req, res){
        Dragon.remove({_id: req.params.id}, function(er){
            res.redirect('/');
        })
    },
    edit: function(req, res){
        dragon = Dragon.find({_id: req.params.id}, function(err, dragon){
            res.render("editDragon.ejs", {dragon});
        });
    },
    update: function(req, res){
        Dragon.findOne({_id: req.params.id}, function(err, dragon){
            dragon.name = req.body.name,
            dragon.age = req.body.age,
            dragon.size = req.body.size,
            dragon.fire = req.body.fire,
            dragon.faveFood = req.body.faveFood
            dragon.save(function(err){
            })
            res.redirect('/');
        })
    }
}