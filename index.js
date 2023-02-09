require('dotenv').config()
const express = require('express')
const cors = require('cors')

const auth = require('./middlewares/auth')
const disbursement = require('./routes/disbursement')

const PORT = process.env.PORT

const app = express()
app.use(cors())

app.use('/api/disbursement', auth, disbursement)

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`)
})
