const db = require('./db')

const mongoUri = process.env.MONGO_URI
const shortUrl = process.env.SHORT_URL

const connect = (url, res) => {
   var _id
   if (db.get('_id')) { _id = db.get('_id') }
  
  
  

         if (docs.length === 0) {
            collection.insertMany(
               [{_id: 'url info', numIds: 0}, {_id: 0, url}]
            ).then(() => {
               const urlsToSend = {normal: url, shortened: shortUrl + '0'}
               db.close()
               res.status(200).end(JSON.stringify(urlsToSend))
            }).catch(err => console.log(err))
         } else {
            collection.update(
               {_id: 'url info'}, {$inc: {numIds: 1}}
            ).then(() => {
               const urlId = docs[0].numIds + 1
               collection.insert({_id: urlId, url})
               return urlId
            }).then(urlId => {
               const urlToSend = {normal: url, shortened: shortUrl + urlId}
               res.status(200).end(JSON.stringify(urlToSend))
               db.close()
            }).catch(err => console.log(err))
         }
      })
   })
}

module.exports = {
   connect,
   getUrl
}
