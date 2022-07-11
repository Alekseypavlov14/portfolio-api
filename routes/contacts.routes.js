const { Router } = require('mongoose')
const ContactsController = require('../controllers/contacts.controller')

const router = Router()

router.get('/', (req, res) => ContactsController.get(req, res))

module.exports = router