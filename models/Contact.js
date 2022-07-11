const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  media: { type: String, required: true },
  contact: { type: String, required: true },
  reference: { type: String, required: true }
})

const Contact = mongoose.model('contact', contactSchema)

module.exports = Contact