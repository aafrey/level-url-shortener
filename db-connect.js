const mongo = require('mongodb').MongoClient

const mongoUri = process.env.MONGO_URI 

const connect = (url, res) => {
  var shortUrl
  mongo.connect(mongoUri, (err, db) => {
    if (err) throw err
    var foo
    var collection = db.collection('urls')
    
    var currentUrlId = collection.findOne({url: 'numIds'}, (err, docs) => {
      if (err) throw err
      
      if (docs === null) {
        collection.insertMany([{urlId: 0}, {urls: {0: url}}], (err,))
      }
    })
  })
}

module.exports = connect

