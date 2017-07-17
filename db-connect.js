const mongo = require('mongodb').MongoClient

const mongoUri = process.env.MONGO_URI

const connect = (url, res) => {
  mongo.connect(mongoUri, (err, db) => {
    if (err) throw err

    const collection = db.collection('urls')

    collection.find({urlId: 'url info'}).toArray((err, docs) => {
      if (err) throw err
      console.log(docs)
      if (docs.length === 0) {
        
        collection.insertMany([{_Id: 'url info', numIds: 0}, {0: url}], (err) => {
          if (err) throw err

          const urlsToSend = {normal: url, shortened: 'https://nickel-value.glitch.me/0'}

          db.close()
          res.end(JSON.stringify(urlsToSend))
          
        })
      } else {
        res.end('todo')
        db.close()
      }
    })
  })
}

module.exports = connect

