const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.render('home.hbs', {
    style: ['home.css'],
  });
});

app.get('/about', (req, res, next) => {
  res.render('about.hbs', {
    style: ['about.css'],
  });
});

app.get('/works', (req, res, next) => {
  res.render('works.hbs', {
    style: ['works.css'],
  });
});

app.get('/photos', (req, res, next) => {
  res.render('photos.hbs', {
    style: ['photos.css'],
  });
});

app.listen(4000, () => {
  console.log(`App listening on http://localhost:4000`);
});
