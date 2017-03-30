var express = require('express');
var exphbs = require ('express-handlebars');
var dotenv = require ('dotenv').config();
var request = require ('request');
var bodyParser = require ('body-parser');

var app = express();

var api_key = process.env.API_KEY;
var api_url = process.env.API_URL;

app.use(express.static('public'));
app.use(require('body-parser').urlencoded({
  extended: true}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

app.post('/', function(req, res) {
  var searchUrl = api_url + '/search/movie' + '?api_key=' + api_key + '&query=' + req.body.query;
  request(searchUrl, function (error, response, body) {
    res.locals.data = JSON.parse(body);
    res.render('home');
  });
});

app.get('/movie/:id', function (req, res) {
  var movieUrl = api_url + '/movie/' + req.params.id + '?api_key=' + api_key;
  request(movieUrl, function (error, response, body) {
    res.locals.data = JSON.parse(body);
    res.render('movie');
  });
});

app.listen(3000);
