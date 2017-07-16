const http = require('http')

const parseUrl = (urlParams) => {
  var url = urlParams.url + urlParams[0]
}

const isUrlValid = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      if (res.statusCode !== 200) reject()
      else resolve()
    })
  })
}

module.exports ={
  parseUrl,
  isUrlValid
}