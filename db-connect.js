const mongo = require('mongodb').MongoClient

const url = 'mongodb://' + process.env.DBUSER + ':' + process.env.DBPW + '@ds147872.mlab.com:47872/glitch' 

const connect = (url) => {
  mongo.connect(url, (err, db) => {
    if (err) throw err
    
    var collection = db.collection('urls')
    
    collection.find({url: 'numIds'}).toArray((err, docs) => {
      if (docs.length === 0) {
        collection.insertMany([{url: {numIds: 0}}, {url: {0: url}}])
        return '0'
      }
      return docs[0].toString()
      db.close()
    })
    
  })
}

module.exports = connect

