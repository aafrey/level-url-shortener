const db = require('./db')

const shortUrl = process.env.SHORT_URL

const connect = (url, res) => {
   var _id
   
   db.get('_id', (err, val) => {
     _id = val
     console.log(_id)
   })
   console.log(_id)
  
   if (_id === undefined) { 
     db.put('_id', '0')
     _id = '0'
   } else { 
     db.get('_id', (err, val) => {
       _id = val
     }) 
   }
  
   const urlsToSend = {normal: url, shortUrl: shortUrl + _id }
   
   _id = parseInt(_id)
   _id++
   db.put('_id', parseInt(_id))
     
   res.status(200).end(JSON.stringify(urlsToSend))
} 

function getId = new Promise((resolve, reject) => {
  db.get('_id', (err, val) => {
    if (err) reject(err)
    if (val === undefined) {
      db.put('_id', '0')
      resolve('0')
    }
    else resolve(val)
  })
})

const getUrl = (id) => { new Promise((resolve, reject) => {
  
})
}


module.exports = {
   connect,
   getUrl
}
