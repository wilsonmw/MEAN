
var express = require("express");

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dashboard');

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

var path = require("path");

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', "ejs");

// Schemas
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    text: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref:"Comment"}]
}, {timestamps: true});

mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post');

var CommentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    text: {type: String, required: true},
    _post: {type: Schema.Types.ObjectId, ref: "Post"},
    },{timestamps: true});

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

// Routes

app.get('/', function(req, res){
    Post.find({}).populate('comments').exec(function(err, post){
        if(post == null){
            post = [];
        }
        console.log(post[0].comments[0].text)
        res.render('index.ejs', {"posts": post});
    })
})

app.post('/newPost', function(req, res){
    var newPost = new Post(req.body);
    newPost.save(function(err){
        res.redirect('/');
    });
})

app.post('/newComment', function(req, res){
    Post.findOne({_id: req.body.id}, function(err, post){
        var newComment = new Comment({"name": req.body.name, "text": req.body.text, "_post":req.body.id});
        newComment.save(function(err){
            post.comments.push(newComment);
            post.save(function(err){
                console.log(post.comments.text);
                res.redirect('/');
            })
        });
    })
})

//Setting server to Listen
app.listen(8000, function(){
    console.log("Listening on port 8000");
});
