require('./config/dbConnection');

const mongoose = require('mongoose');

//const createError = require('http-errors');
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const hughRouter = require('./routes/hughRoute');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use('/', hughRouter);

// app.use((req, res, next) => {
//   next(createError(404));
// });

// app.use((err, req, res, next) => {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(4000, () => {
  console.log(`App listening on http://localhost:4000`);
});

module.exports = app;
