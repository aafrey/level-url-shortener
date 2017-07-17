const mongo = require('mongodb').MongoClient

const mongoUri = process.env.MONGO_URI

const connect = (url, res) => {
  mongo.connect(mongoUri, (err, db) => {
    if (err) {
      throw err
    }

    const collection = db.collection('urls')

    collection.find({_id: 'url info'}).toArray((err, docs) => {
      if (err) {
        throw err
      }

      if (docs.length === 0) {
        collection.insertMany(
          [{_id: 'url info', numIds: 0}, {0: url}]
        ).then(() => {
          const urlsToSend = {normal: url, shortened: 'https://nickel-value.glitch.me/0'}
          db.close()
          res.end(JSON.stringify(urlsToSend))
        }).catch(err => console.log(err))
      } else {
        collection.update(
          {d: 'url info'}, {$inc: {numIds: 1}}
        ).then(() => {
          const urlId = {}
          const key = docs[0].numIds + 1
          urlId[key] = url
          collection.insert(urlId)
          return key
        }).then(key => {
          const urlToSend = {normal: url, shortened: 'https://nickel-value.glitch.me/' + key}
          res.end(JSON.stringify(urlToSend))
          db.close()
        }).catch(err => console.log('ERR:', err))
      }
    })
  })
}

module.exports = connect

