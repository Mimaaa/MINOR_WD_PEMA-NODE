// Set all the requires
var express = require('express');
var compression = require('compression');
var exphbs = require ('express-handlebars');
var dotenv = require ('dotenv').config();
var request = require ('request');
var bodyParser = require ('body-parser');
var awesomplete = require ('awesomplete');

// Use express
var app = express();

// Enabling gZip compression and tell the module to compress all files
app.use(compression({
    threshold: 0,
    filter: () => true,
}));

// Get the key & url from the .env file
var api_key = process.env.API_KEY;
var api_url = process.env.API_URL;

// Tell the app that it can find the static files in the public dir
app.use(express.static('public'));

// Enabling body-parser
app.use(require('body-parser').urlencoded({
  extended: true}));

// Tell the app to use Handlebars, the default template can be found in the main file
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set the home route
app.get('/', function (req, res) {
  res.render('home');
});

// Getting data from the API with a request where the results are rendered on the homepage based on the query
app.post('/', function(req, res) {
  var searchUrl = api_url + '/search/movie' + '?api_key=' + api_key + '&query=' + req.body.query;
  request(searchUrl, function (error, response, body) {
    res.locals.data = JSON.parse(body);
    res.render('home');
  });
});

// Getting data from the API with a request where the results are rendered on the movie page based on the ID that is requested
app.get('/movie/:id', function (req, res) {
  var movieUrl = api_url + '/movie/' + req.params.id + '?api_key=' + api_key;
  request(movieUrl, function (error, response, body) {
    res.locals.data = JSON.parse(body);
    res.render('movie');
  });
});

// Run server
app.listen(3000);
