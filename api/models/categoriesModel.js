// const db = require('../adapter')
const {
  getAllElementsCollection
} = require('../utils.js')
const categoriesCollection = 'categories'
function list () {
  return getAllElementsCollection(categoriesCollection)
}

module.exports = { list, categoriesCollection }
