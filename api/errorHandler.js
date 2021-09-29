'use strict'

const errorHandler = (error) => {
  console.error(error)
  throw new Error('Server is failing, Sorry! ')
}

module.exports = {
  errorHandler
}
