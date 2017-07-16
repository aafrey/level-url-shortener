const validUrl = require('valid-url')

const parseUrl = (urlParams) => {
  return urlParams.url + urlParams[0]
}

const isUrlValid = (url) => {
  console.log(validUrl.isUri(url))
  
  if (!validUrl.isWebUri(url) && url.includes(',') ) throw new Error('Invalid URL string')
  else return url
}

module.exports ={
  parseUrl,
  isUrlValid
}