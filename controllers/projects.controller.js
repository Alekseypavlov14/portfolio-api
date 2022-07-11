const Project = require('./../models/Project')

class ProjectsController {
  async get(req, res) {
    const projects = await Project.find({})

    return res.json({ projects })
  }
}

module.exports = new ProjectsController()