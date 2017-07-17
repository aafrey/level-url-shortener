const mongo = require('mongodb').MongoClient

const mongoUri = process.env.MONGO_URI 

const connect = (url) => {
  var shortenedUrl
  mongo.connect(mongoUri, (err, db) => {
    if (err) throw err
    
    var collection = db.collection('urls')
    
    return collection.findOne({url: 'numIds'}, (err, docs) => {
      if (err) throw err
      
      if (docs === null) {
        collection.insertMany([{url: {numIds: 0}}, {url: {0: url}}], () => {
          shortenedUrl = 'https://nickel-value.glitch.me/0'
          db.
        })
      } else {
        shortenedUrl = 'https://nickel-value.glitch.me/' + docs[0].toString()
      }
    })
    db.close()
  })
  return shortenedUrl
}

module.exports = connect

