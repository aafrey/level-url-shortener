const mongo = require('mongodb').MongoClient

const mongoUri = process.env.MONGO_URI

const connect = (url, res) => {
  mongo.connect(mongoUri, (err, db) => {
    if (err) throw err

    const collection = db.collection('urls')

    collection.find({_id: 'url info'}).toArray((err, docs) => {
      if (err) throw err
      console.log(docs[0].numIds)
      if (docs.length === 0) {
        
        collection.insertMany([{_id: 'url info', numIds: 0}, {0: url}], (err) => {
          if (err) throw err

          var urlsToSend = {normal: url, shortened: 'https://nickel-value.glitch.me/0'}

          db.close()
          res.end(JSON.stringify(urlsToSend))
          
        })
      } else {
        collection.update({_id: 'url info'}, {$inc: {numIds: 1}}).then((err) => {
          if (err) throw err
          
          var urlToSend = {normal: url, shortened: ''}
          res.end()
          db.close()  
        })
      }
    })
  })
}

module.exports = connect

