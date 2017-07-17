const mongo = require('mongodb').MongoClient

const mongoUri = process.env.MONGO_URI 

const connect = (url) => {
  mongo.connect(mongoUri, (err, db) => {
    if (err) throw err
    
    var collection = db.collection('urls')
    
    collection.findOne({url: 'numIds'}, (err, docs) => {
      if (err) throw err
      console.log(docs)
      var shortenedUrl
      
      if (docs === null) {
        collection.insertMany([{url: {numIds: 0}}, {url: {0: url}}])
        .then(() => {
          shortenedUrl = 'https://nickel-value.glitch.me/0'
          db.close()
          return shortenedUrl
        })
      } else {
        shortenedUrl = 'https://nickel-value.glitch.me/' + docs[0].toString()
      }
      
      db.close()
      return shortenedUrl  
    })
    
  })
}

module.exports = connect

