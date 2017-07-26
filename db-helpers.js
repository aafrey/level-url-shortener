const db = require('./db')

const shortUrl = process.env.SHORT_URL

const getNextId = () => { 
  return new Promise((resolve, reject) => {
  db.get('_id', (err, val) => {
    if (err) reject(err)
    if (val === undefined) {
      db.put('_id', '0')
      resolve('0')
    }
    else {
      console.log(val)
      resolve(val)
    }
  })
})
}                         

const getUrl = (id) => { 
  new Promise((resolve, reject) => {
    db.get(id, (err, val) => err ? reject(err) : resolve(val))
  })
}

const connect = (url, res) => {
   
   getNextId()
   .then((id) => res.status(200).send(JSON.stringify({normal: url, shortUrl: shortUrl + id })))
   .then(() => {
     _id = parseInt(_id)
     _id++
     db.put('_id', parseInt(_id))
   })
} 

module.exports = {
   connect,
   getUrl
}
