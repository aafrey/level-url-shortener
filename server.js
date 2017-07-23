const express = require('express')

const {isUrlValid, parseUrl} = require('./helpers')

const {connect, getUrl} = require('./db-helpers')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))

app.post('/dreams', (req, res) => {
  const url = req.query.dream
  console.log(isUrlValid(url))
  if (isUrlValid(url)) connect(url, res)
  else throw new Error('Invalid URL syntax.')
})

app.get('/new/:url*', (req, res) => {
   const url = parseUrl(req.params)
   if (isUrlValid(url)) connect(url, res)  
   else throw new Error('Invalid URL syntax.')
})

app.get('/:urlId', (req, res) => {
   if (req.params) getUrl(req.params.urlId, res)
})

const listener = app.listen(process.env.PORT, () => {
  console.log('listening on:',listener.address().port)
})
