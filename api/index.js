const express = require('express')
const cors = require('cors')

const auth = require('./middlewares/auth')
const disbursement = require('./services/disbursement')

const app = express()
app.use(cors())

app.use('/api/disbursement', auth, disbursement)

module.exports = app
