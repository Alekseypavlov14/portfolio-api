const Admin = require('./../models/Admin')

class AuthController {
  async post(req, res) {
    // this route is under auth middleware!
    const login = req.body.login

    const admin = await Admin.findOne({ login })

    return res.json({ admin })
  }
}

module.exports = new AuthController