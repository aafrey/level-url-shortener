const mongo = require('mongodb').MongoClient

const mongoUri = process.env.MONGO_URI 
console.log(mongoUri)

const connect = (url) => {
  mongo.connect(mongoUri, (err, db) => {
    if (err) throw err
    
    var collection = db.collection('urls')
    
    collection.find({url: 'numIds'}).toArray((err, docs) => {
      if (err) throw err
      
      var shortenedUrl
      
      if (docs.length === 0) {
        collection.insertMany([{url: {numIds: 0}}, {url: {0: url}}])
          .then(() => {
            shortenedUrl = 'https://nickel-value.glitch.me/0'
            db.close()
            
      } else {
        shortenedUrl = 'https://nickel-value.glitch.me/' + docs[0].toString()
      }
      
      db.close()
      return shortenedUrl  
    })
    
  })
}

module.exports = connect

