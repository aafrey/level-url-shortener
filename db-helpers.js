const db = require('./db')

const shortUrl = process.env.SHORT_URL

const connect = (url, res) => {
   var _id
   if (db.get('_id') === undefined) { _id = db.put('_id', '0') }
   else { _id = db.get('_id') }
   const urlToSend = {normal: url, shortUrl: shortUrl + _id }
   
   (parseInt(_id), _id++)
   db.put('_id', parseInt(_id))
     
   res.status(200).end(JSON.stringify(urlsToSend))

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
