function auth (req, res, next) {
  if (req.headers['authorization'] === 'Bearer token123') {
    next()
  } else {
    res.status(401).json({
      message: 'invalid token',
    })
  }
}

module.exports = auth
