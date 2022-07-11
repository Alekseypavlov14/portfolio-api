const Contact = require("../models/Contact")

class ContactsController {
  async get(req, res) {
    const contacts = await Contact.find({})

    return res.json({ contacts })
  }
}

module.exports = new ContactsController()