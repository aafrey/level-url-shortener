const db = require('./db')

const shortUrl = process.env.SHORT_URL

const getUrl = (urlId, res) => {
  res.status(200).end(db.get(urlId))
}

const connect = (url, res) => {
   var _id
   if (db.get('_id') === undefined) { _id = db.put('_id', '0') }
   else { _id = db.get('_id') }
   const urlsToSend = {normal: url, shortUrl: shortUrl + _id }
   
   (parseInt(_id), _id++)
   db.put('_id', parseInt(_id))
     
   res.status(200).end(JSON.stringify(urlsToSend))
} 

module.exports = {
   connect,
   getUrl
}
