require('dotenv').config()
const express = require('express')
const path = require('path')
const api = require('./api')

const PORT = process.env.PORT

const app = express()
app.use(api)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`)
})
