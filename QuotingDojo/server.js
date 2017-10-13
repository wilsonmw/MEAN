var express = require("express");

var app = express();

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/quoting_dojo");
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 10}
}, {timestamps: true});
mongoose.model("Quote",QuoteSchema);
var Quote = mongoose.model("Quote");

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

var path = require("path");

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');


//Routes
app.get('/', function(req, res){
    res.render("index.ejs", {title:"You have errors!", errors: ""});
})

app.post('/quotes', function(req, res){
    var quote = new Quote({name: req.body.name, quote:req.body.quote});
    quote.save(function(err){
        if(err){
            res.render('index.ejs', {title:"You have errors!", errors: quote.errors});
        }
        else{
            res.redirect('/quotes');
        }
    })   
})

app.get('/quotes', function(req, res){
    var quotes = Quote.find({}, function(err, quotes){
        console.log(quotes);
        res.render('quotes.ejs', {"quotes": quotes});
    })
})

app.post("/delete", function(req, res){
    Quote.remove({}, function(err){
        res.redirect('/');
    })
})




//Setting server to listen on port 8000
app.listen(8000, function(){
    console.log("Listening on port 8000.")
});
