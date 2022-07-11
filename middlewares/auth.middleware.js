function auth(req, res, next) {
  const login = req.body.login
  const password = req.body.password

  if (!login || !password) {
    return res.json({
      message: "Properties 'login' and 'password' are required"
    })
  }

  const candidate = await 
}