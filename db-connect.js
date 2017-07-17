const mongo = require('mongodb').MongoClient

const url = 'mongodb://' + process.ENV.DBUSER + ':' + process.ENV.DBPW + '@ds147872.mlab.com:47872/glitch' 

const connect = (urlId, actualUrl) => {
  mongo.connect(url, (err, db) => {
    if (err) throw err
    
    var collection = db.collection('urls')
    
    collection.find({url: 'numIds'}).toArray((err, docs) => {
      console.log(docs)
      db.close()
    })
    //collection.insert('')
    
  })
}

connect()

//module.exports = connect

