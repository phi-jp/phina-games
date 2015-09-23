/*
 *
 */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();
var ip = require('ip');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware
app.use(logger('dev'));

// if (process.env.PORT) {
//   app.use(express.static(path.join(__dirname, '../bower_components')));
// }
// else {
  app.use(require('less-middleware')(path.join(__dirname, '../games')));
  app.use(express.static(path.join(__dirname, '../games')));
// }

// app.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var server = app.listen((process.env.PORT || 3000), function() {
  // var host = server.address().address;
  var host = ip.address();
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
