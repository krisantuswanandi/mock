require('dotenv').config()
const express = require('express')
const cors = require('cors')

const auth = require('./middlewares/auth')
const disbursement = require('./routes/disbursement')

const PORT = process.env.PORT

const app = express()
app.set('view engine', 'ejs');
app.use(cors())

app.use('/', (req, res) => {
  res.render('index')
})

app.use('/disbursement', auth, disbursement)

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`)
})
