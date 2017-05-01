const path = require('path');
const express = require('express');
const api = require('./api');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // Definissez ejs comme 'view engine'
// pour servir les pages statiques
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Pour la route ci-dessous ('/'), utilisez 'res.render' pour charger le template ejs désiré :
// index page

app.use(express.static('client/build/'));
app.use('/api', api);

app.get('/about', (req, res) => {
  res.render('pages/about');
});

// routes pour servir react app
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(8080, (err) => {
  if (err) {
    throw (err);
  }

  console.log('server is running on http://localhost:8080');
});
