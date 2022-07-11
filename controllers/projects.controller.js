const Project = require('./../models/Project')

class ProjectController {
  async get(req, res) {
    const projects = await Project.find({})

    return projects
  }
}

module.exports = new ProjectController()