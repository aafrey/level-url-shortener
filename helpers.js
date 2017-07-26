const validUrl = require('validator')

const isUrlValid = url => {
   if (!validUrl.isURL(url) || url.slice(0, 4) !== 'http') {
      return false
   }
   return true
}

module.exports = isUrlValid
