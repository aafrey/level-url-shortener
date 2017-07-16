const url = require('url')

const parseUrl = (urlParams) => {
  return urlParams.url + urlParams[0]
}

const isUrlValid = (urlToParse) => {
  var urlDetails = url.parse(urlToParse)
  
  if (urlDetails.host === null) throw new Error('Invalid URL string')
  else {
    return urlDetails.href
  }
}

module.exports ={
  parseUrl,
  isUrlValid
}