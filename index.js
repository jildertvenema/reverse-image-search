const axios = require('axios')

const reverseImageSearch = (imageUrl, callBack) => {
  axios.get('https://node-reverse-image-search.herokuapp.com/?imageUrl=' + encodeURIComponent(imageUrl))
  .then(images => {
    callBack(images)
  })
}

module.exports = reverseImageSearch
