const express = require('express')

const auth = require('./middlewares/auth')
const disbursement = require('./services/disbursement')

const app = express()

app.use('/api/disbursement', auth, disbursement)

module.exports = app
