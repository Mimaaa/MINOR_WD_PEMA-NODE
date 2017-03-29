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
  var query = req.body.query;
  var searchUrl = api_url + '?query=' + query + '&api-key=' + api_key;
  request(searchUrl, function (error, response, body) {
    res.locals.data = JSON.parse(body);
    res.render('home');
  });
});

app.listen(3000);
