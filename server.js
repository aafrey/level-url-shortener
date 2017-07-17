const connect = require('./db-connect')
const {isUrlValid, parseUrl} = require('./helpers')
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/new/:url*', (req, res) => {
  var url = parseUrl(req.params)
  if (isUrlValid(url)) connect(url, res)
  else throw new Error('Invalid URL syntax.')
  
})

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})