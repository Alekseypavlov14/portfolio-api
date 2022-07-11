const Admin = require("../models/Admin")

function auth(req, res, next) {
  const login = req.body.login
  const password = req.body.password

  if (!login || !password) {
    return res.status(400).json({
      message: "Properties 'login' and 'password' are required"
    })
  }

  const candidate = await Admin.findOne({ login, password })

  if (!candidate) {
    return res.status(401).json({
      message: "Authentication is required"
    })
  }

  return res.json({ admin: candidate })
}

module.exports = auth