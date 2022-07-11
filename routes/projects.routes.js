const { Router } = require('express')
const controller = require('./../controllers/projects.controller')

const router = Router()

router.get('/', (req, res) => controller.get(req, res))

module.exports = router