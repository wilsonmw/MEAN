// Express
var express = require('express');
var app = express();
var bcrypt = require('bcrypt-as-promised');

// Flash
var flash = require('express-flash');
app.use(flash());

// Path
var path = require('path');

// Session
var session = require('express-session');
app.use(session({secret: 'iamsuperrad'}));

// Static Folder
app.use(express.static(path.join(__dirname, 'static')));

//Body-Parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

// EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginreg');

let UserSchema = new mongoose.Schema( {
    first_name: {type: String, required: [true, "Please include your first name."]
},
last_name: {type: String, required: [true, "Please include your last name."]
},
birthdate: {type: Date, required: [true, "Please include your birthdate."]
},
email: {type: String, required: [true, "Please include your email address."]
},
password: {type: String, required: [true, "Please include a password."]
},
created_at: {type: Date, required: true, default: Date.now},
updated_at: {type: Date, required: true, default: Date.now},
})
let User = mongoose.model("User", UserSchema);

function hashed_password(password) {
    bcrypt.hash(password, 10)
        .then( data => {
            return data;
            console.log("&&&&", data)
        })
}

UserSchema.pre('save', function(done){
    console.log("**** im here")
    this.password = hashed_password(this.password)
    console.log(this.password, "^^^^^^^")
    done();
})

// Routes
app.get('/', function(req, res){
    User.find({}, function(err, users){
        // console.log(users);
    })    
    res.render('index', {registrationMessage: req.flash("registrationMessage") || null, 
    registrationErrors: req.flash('registrationErrors') || null,
    passMatchMessage: req.flash('passMatchMessage') || null
    });
})

app.post('/users', function(req, res){

    var user = new User(req.body);
        user.save(function(err, data){
        console.log(data.password, "~~~~~~");
        if(err) {
            req.flash('registrationErrors', err)
            return res.redirect('/');
        }
        // else if(req.body.confirm_pw != req.body.password){
        //     req.flash('passMatchMessage', "Confirm Password field must match Password field.");
        //     return res.redirect('/');
        //}
        else{

            req.flash("registrationMessage", "Registration successful, please log in.");
            res.redirect('/');
        }
    });
    })


app.post('/sessions', function(req, res){
    User.findOne(req.body, function(err, user){
        if(err){
            console.log("Error!!!!!!!!!")
        }
        else if(!user){
            console.log("Error***************");
        }
        else{
            req.session.user_id = user._id;
            res.redirect('/dashboard');
        }
    })
})

app.get('/dashboard', function(req, res){
    User.findById(req.session.user_id, function(err, user){
        if(err){
            console.log("Another error!!!!!!!!!!!!!!!");
        }
        else if(!user){
            console.log("No user found***************");
        }
        else{
            console.log(user);
            res.render('dashboard', {user: user});
        }
    })
})





//Listen to server on 8000
app.listen(8000, function(){
    console.log("Listening on port 8000");
})