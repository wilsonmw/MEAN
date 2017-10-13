var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index.ejs');
})

app.post('/result', function(request, response){
    var results = {
        name: request.body.name,
        location: request.body.location,
        language: request.body.language,
        comment: request.body.comment
    }
    response.render('result.ejs', results);
})


app.listen(8000, function(){
    console.log("Listening on port 8000.");
})