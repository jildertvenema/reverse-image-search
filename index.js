const osmosis = require('osmosis')

const reverseImageSearch = (imageUrl, callBack) => {
  osmosis
    .get('https://www.google.com/searchbyimage?image_url=' + encodeURIComponent(imageUrl))
    .find('div:nth-child(4) > div > div > div > div > div.r > a')
    .set({
      url: '@href',
      title: 'h3'
    })
    .data(function (listing) {
      callBack(listing)
    })
}

module.exports = { reverseImageSearch }
