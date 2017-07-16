const connect = require('./db-connect')
const express = require('express');
const app = express();
const url = require('url')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/new/:url*', (req, res) => {
  //var url = req.params.url
  //connect(url)
  //respond with JSON
  var urlToShorten = req.params.url + req.params[0]
  console.log(url.parse('www.fgaf'))
  res.end(urlToShorten)
})

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


/*
Grab to be shortened URL from params

parse to ensure its valid

addd a new entry to db collection that matches the shortened URL with the original

return it to client
*/