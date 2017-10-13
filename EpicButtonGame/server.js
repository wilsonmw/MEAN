var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static(path.join(__dirname + "/static")));

app.set('views', path.join(__dirname + '/views'));
app.set ('view engine', 'ejs');

var count = 0;
app.get('/', function(req, res){
    res.render("index.ejs", {"count":count});
})



var server = app.listen(8000, function(){
    console.log("Listening on port 8000.");
});
var io = require('socket.io').listen(server);

io.sockets.on("connection", function(socket){
    console.log("Socket is connected.");
    console.log("Socket ID is: ", socket.id);

    socket.on("button_clicked", function(){
        count += 1;
        io.emit("server_response", count);
    })
    socket.on("reset_clicked", function(){
        count = 0;
        io.emit("server_response", count);
    })
})