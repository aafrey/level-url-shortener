const mongo = require('mongodb').MongoClient

const url = "mongodb://" + process.env.DBUSER + ":" + process.env.DBPW + "@ds147872.mlab.com:47872/glitch" 
console.log(url)

const connect = (url) => {
  mongo.connect(url, (err, db) => {
    if (err) throw err
    
    var collection = db.collection('urls')
    
    collection.find({url: 'numIds'}).toArray((err, docs) => {
      if (docs.length === 0) {
        collection.insertMany([{url: {numIds: 0}}, {url: {0: url}}])
        return 'https://nickel-value.glitch.me/0'
      }
      return 'https://nickel-value.glitch.me/' + docs[0].toString()
      db.close()
    })
    
  })
}

module.exports = connect

