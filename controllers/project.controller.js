const Project = require('./../models/Project')

class ProjectController {
  async post(req, res) {
    const { project } = req.body

    res.json({ project })
  }
}

module.exports = new ProjectController()