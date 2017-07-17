const mongo = require('mongodb').MongoClient

const url = 'mongodb://' + process.env.DBUSER + ':' + process.env.DBPW + '@ds147872.mlab.com:47872/glitch' 

const connect = (urlId, actualUrl) => {
  mongo.connect(url, (err, db) => {
    if (err) throw err
    
    var collection = db.collection('urls')
    
    collection.insert('')
    
  })
}

module.exports = connect

