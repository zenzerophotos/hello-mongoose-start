var express = require('express'),
    logger  = require('morgan')('dev'),
    path    = require('path'),
    server  = express();


var port = process.env.PORT || 9000;

server.use(express.static(path.join(__dirname,'public')));
server.use(logger);



server.get('/', function(req, res){
  res.send('this is a starter application, welcome!');
});

server.get('/json', function(req, res){
  var someJson = [
    {
      desc: 'learn how to build a web based api',
      completed: false
    },
    {
      desc: 'build an Angular frontend that consumes the api',
      completed: false
    }
  ];

  res.json(someJson);
});

server.listen(port, function(){
  console.log('Now listening on port ' + port);
});
