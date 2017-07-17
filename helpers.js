const validUrl = require('validator')

const parseUrl = (urlParams) => {
  return urlParams.url + urlParams[0]
}

const isUrlValid = (url) => {
  console.log(validUrl.isURL(url))
  
  if (!validUrl.isURL(url)) throw new Error('Invalid URL string')
  else return url
}

module.exports = {
  parseUrl,
  isUrlValid
}