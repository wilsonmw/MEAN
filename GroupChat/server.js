// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');

var session = require('express-session');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// use session
app.use(session({secret: "superradical"}));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var messages = [];
var messObj = {"messages":messages};

// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index", {"messages": messages});
})


// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require("socket.io").listen(server);

io.sockets.on('connection', function (socket){
    console.log("Socket is connected.")
    console.log("Socket ID is: ", socket.id);
    socket.emit("load", function(){
    })

    socket.on("new_user", function(person){
        socket['name'] = person
        // users[socket.id] = person;
        console.log(socket.name); 
    })

    socket.on("new_message", function(message){
        var namePlusMessage = socket.name+" says: "+message;
        messages.push(namePlusMessage);       
        io.emit("updateChat", messObj);
    })

})