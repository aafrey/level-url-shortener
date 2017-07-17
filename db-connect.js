const mongo = require('mongodb').MongoClient

const mongoUri = process.env.MONGO_URI

const connect = (url, res) => {
  mongo.connect(mongoUri, (err, db) => {
    if (err) throw err

    const collection = db.collection('urls')
    // TODO fix this query, it's always returns null
    collection.find({urlId: {$exists: true}}, (err, docs) => {
      if (err) throw err

      if (docs === null) {
        collection.insertMany([{urlId: {numIds: 0}}, {urls: {0: url}}], (err, r) => {
          if (err) throw err

          const urlsToSend = {normal: url, shortened: 'https://nickel-value.glitch.me/0'}

          db.close()
          res.end(JSON.stringify(urlsToSend))
        })
      } else {
        console.log('todo')
      }
    })
  })
}

module.exports = connect

