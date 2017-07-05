// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

//Require History Schema
//var History = require('./models/History.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Allows us to use static paths
app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
var Articles = require('./models/articles.js');
var mongoose = require('mongoose');
var uri = process.env.MONGODB_URI || 'mongodb://localhost/nytmern';
mongoose.connect(uri);  //This is to connect locally
//mongoose.connect("mongodb://heroku_mgk2lddj:3rptbp9oitsf16u3si1n68b7mc@ds019766.mlab.com:19766/heroku_mgk2lddj");  // This is to connect on Heroku

var db = mongoose.connection;
//
db.on('error', function (err) {
   console.log('Mongoose Error: ', err);
});
//
db.once('open', function () {
   console.log('Mongoose connection successful.');
});

// Main Route. This route will redirect to our rendered React application
// app.get('/', function(req, res){
//   res.sendFile('./public/index.html');
// });

app.get('/api', function(req, res) {

  // This GET request will search for the latest clickCount
  Articles.find({}).sort('-date').exec(function(err, doc){

           if(err){
             console.log(err);
           }
           else {
             res.send(doc);
           }
    });
});


app.post('/api/', function(req, res){
       var newArticle = new Articles(req.body);
       //console.log(req.body);
       console.log(req.body);
     //   var clickID = req.body.clickID;
     //   var clicks = parseInt(req.body.clicks);

       // Note how this route utilizes the findOneAndUpdate function to update the clickCount.
      newArticle.save(function(err, doc){
              if(err){
                console.log(err);
              }

              else{
                   res.send("Updated Click Count!");
              }
       });
  });


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
