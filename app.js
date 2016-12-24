'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const winston = require('winston');
const routes = require('./routes/index');
const debug = require('debug')('MyApp');

const fakeService = require('./services/faker.service');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: '*'}));

routes(app);

// // init  users
// fakeService.initData()
//     .then(data=> {
//         winston.info(data);
//     }).catch(error=> {
//         winston.error(error);
//     });

app.listen(process.env.PORT || '3000', ()=> {
  winston.info('App listening');
});

// catch 404 and forward to error handler
app.use((req, res, next)=> {
  winston.error('Not Found');
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next)=> {
  winston.error(err);
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
