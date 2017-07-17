const mongo = require('mongodb').MongoClient

const mongoUri = process.env.MONGO_URI 

const connect = (url) => {
  var shortenedUrl
  mongo.connect(mongoUri, (err, db) => {
    if (err) throw err
    
    var collection = db.collection('urls')
    var short
    collection.findOne({url: 'numIds'}, (err, docs) => {
      if (err) throw err
      var short
      if (docs === null) {
        collection.insertMany([{url: {numIds: 0}}, {url: {0: url}}], () => {
          short = 'https://nickel-value.glitch.me/0'
        })
      } else {
        short = 'https://nickel-value.glitch.me/' + docs[0].toString()
      }
    })
    db.close()
    console.log(short)
  })
  //console.log(shortUrl)
}

module.exports = connect

