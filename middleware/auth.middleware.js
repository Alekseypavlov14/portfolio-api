const Admin = require("../models/Admin")
const bcrypt = require('bcrypt')

async function auth(req, res, next) {
  const login = req.body.login
  const password = req.body.password

  if (!login || !password) {
    return res.status(400).json({
      message: "Properties 'login' and 'password' are required"
    })
  }

  const candidate = await Admin.findOne({ login })

  if (!candidate) {
    return res.status(401).json({
      message: "Admin is not found"
    })
  }

  const comparison = bcrypt.compareSync(password, candidate.password)

  if (!comparison) {
    return res.status(401).json({
      message: "Admin is not found"
    })
  }

  next()
}

module.exports = auth