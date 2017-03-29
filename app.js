var express = require('express');
var exphbs = require ('express-handlebars');
var dotenv = require ('dotenv').config();
var request = require ('request');
var bodyParser = require ('body-parser');

var app = express();

var api_key = process.env.API_KEY;

app.use(express.static('public'));
app.use(require('body-parser').urlencoded({
  extender: true}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

app.listen(3000);
