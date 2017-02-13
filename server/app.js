var express = require('express');
var morgan = require('morgan');
var port = process.env.PORT || 8080;
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(morgan('dev'));

app.use(express.static('dist'));

app.route('/')
  .get(function(req, res){
      res.render('index');
  });

app.listen(port, function(){
    console.log('Node listening on port ' + port);
});

