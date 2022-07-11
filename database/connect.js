const mongoose = require('mongoose')

const connect = URI => {
  return mongoose.connect(
    URI,
    () => console.log('Connected to DB')
  )
}

module.exports = connect