var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var session = require('express-session');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bike_marketplace')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: 'Imsuperrad'}));

var path = require('path');

app.use(express.static(path.join(__dirname, './public/dist')));

// Schemas
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 2},
    last_name: {type: String, required: true, minlength: 2},
    email: {type: String, required: true},
    password: {type: String, required: true, minlength: 8},
    bikes: [{type: Schema.Types.ObjectId, ref: "Bike"}]
}, {timestamps: true});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

var BikeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    location: {type: String, required: true},
    image: {type: String, required: true},
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});
mongoose.model('Bike', BikeSchema);
var Bike = mongoose.model('Bike');


// Routes
app.post('/user', function(req, res){
    var userInstance = new User(req.body);
    userInstance.save(function(err, data){
        if(err){
            console.log("The user was not created at the server.js level.");
        } else {
            req.session.userId = data._id;
            res.json(data);
        }
    })
    
})

app.post('/userLogin', function(req, res){
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log("There was an error getting the user from the DB.");
        } else {
            if(user.password == req.body.password){
                req.session.userId = user._id;
                res.json(user);
            } else {
                req.session.userId = null;
                res.json(err);
            }
        }
    })
    
})



app.all('*', (req,res,next)=>{
    res.sendFile(path.resolve("./public/dist/index.html"))
});


app.listen(8000, function(){
    console.log("Listening on port 8000.");
})
