const Project = require('./../models/Project')

class ProjectController {
  async post(req, res) {
    const project = req.body.project

    if (!project) {
      return res.status(400).json({
        message: "Property 'project' is required"
      })
    }

    let newProject

    try {
      newProject = new Project(project)
      await newProject.save()
    } catch (e) {
      return res.status(400).json({
        message: "Project is incorrectly described"
      })
    }

    return res.json({ project: newProject })
  }
}

module.exports = new ProjectController()