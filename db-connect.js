const mongo = require('mongodb').MongoClient

const mongoUri = process.env.MONGO_URI 

const connect = (url, res) => {
  var shortUrl
  mongo.connect(mongoUri, (err, db) => {
    if (err) throw err
    var foo
    var collection = db.collection('urls')
    
    var currentUrlId = collection.findOne({urlId: 'numIds'}, (err, docs) => {
      if (err) throw err
      
      if (docs === null) {
        collection.insertMany([{urlId: {numIds: 0}}, {urls: {0: url}}], (err, r) => {
          var urlsToSend = {normal: url, shortened: 'https://nickel-value.glitch.me/0'}
          db.close()
          
          res.end(JSON.stringify)
        })
      } else {
        console.log('todo')
      }
    })
  })
}

module.exports = connect

