const { Router } = require('express')
const ProjectsController = require('./../controllers/projects.controller')

const router = Router()

router.get('/', (req, res) => ProjectsController.get(req, res))

module.exports = router