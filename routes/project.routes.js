const { Router } = require('express')
const ProjectController = require('../controllers/project.controller')

const router = Router()

router.post('/', (req, res) => ProjectController.post(req, res))

module.exports = router