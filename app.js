var express = require('express'),
bodyParser = require('body-parser'),
app = express();

app.use(bodyParser.json());

app.get('/api/friends', function (req, res) {
  res.json([
    { name: 'Jane', gender: 'f' },
    { name: 'James', gender: 'm' }
  ]); });

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address,
      port = server.address().port;

console.log('Feclass listening at http://%s:%s', host, port);
});

// app.use(express.static(__dirname + '/src'));
