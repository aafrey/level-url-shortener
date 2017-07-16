const connect = require('./db-connect')
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/:url', (req, res) => {
  // parse params
  connect(url)
  //responde with JSON 
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