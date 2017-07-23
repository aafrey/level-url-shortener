const express = require('express')

const morgan = require('morgan')

const {isUrlValid, parseUrl} = require('./helpers')

const {connect, getUrl} = require('./db-helpers')

const app = express()

app.use([express.static('public'), morgan('common')])

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))

app.post('/dreams', (req, res) => {
   const url = req.query.dream
   if (isUrlValid(url)) {
      connect(url, res)
   } else {
      res.status(200).end('Invalid URL syntax.')
   }
})

app.get('/:urlId', (req, res) => {
   if (req.params.urlId !== 'dreams') {
      getUrl(req.params.urlId, res)
   }
})

const listener = app.listen(process.env.PORT, () => {
   console.log('listening on:', listener.address().port)
})
