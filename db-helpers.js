const db = require('./db')

const shortUrl = process.env.SHORT_URL

const getNextId = () => {
   return new Promise((resolve, reject) => {
      db.get('_id', (err, val) => {
         if (val === undefined) {
            db.put('_id', '0')
            resolve('0')
         } else if (err) {
            reject(err)
         } else {
            resolve(val)
         }
      })
   })
}

const getUrl = id => {
   return new Promise((resolve, reject) => {
      db.get(id, (err, val) => err ? reject(err) : resolve(val))
   })
}

const connect = (url, res) => {
   getNextId()
   .then(id => {
        res.status(200).send(JSON.stringify({normal: url, shortUrl: shortUrl + id}))
        db.put(id, url)
        return id
     })
   .then(id => {
      id = parseInt(id, 10)
      id++
      db.put('_id', id)
      return id
   }).then(() => res.end())
   .catch(err => console.log(err))
}

module.exports = {
   connect,
   getUrl
}
