const mongo = require('mongodb').MongoClient

const mongoUri = process.env.MONGO_URI 

const connect = (url) => {
  var shortUrl
  mongo.connect(mongoUri, (err, db) => {
    if (err) throw err
    var foo
    var collection = db.collection('urls')
    
    var currentUrlId = collection.findOne({url: 'numIds'}, (err, docs) => {
      if (err) throw err
      foodocs
    })
    
    //console.log(currentUrlId)
    
    db.close()
  })
  return shortUrl
}

module.exports = connect

