const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  technologies: [{ type: String, required: true }],
  link: { type: String, required: true, unique: true },
  repository: { type: String, required: true, unique: true },
  date: { type: String, required: true }
})

const Project = mongoose.model('project', projectSchema)

module.exports = Project