var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'imsuperrad'}));


app.get('/', function(request, response){
    if(!request.session.counter){
        request.session.counter = 0;
    }
    request.session.counter += 1;
    response.render('index.ejs', {count: request.session.counter});
})

app.get('/add2', function(request, response){
    request.session.counter += 1;
    response.redirect('/');
})

app.get('/reset', function(request, response){
    request.session.destroy();
    response.redirect('/');
})

app.listen(8000, function(){
    console.log("Listening on port 8000.");
})
