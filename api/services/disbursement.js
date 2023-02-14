const express = require('express')
const disbursements = require('../data/disbursements.json')
const agents = require('../data/agents.json')
const programs = require('../data/programs.json')

const router = express.Router()

router.get('/', function (req, res) {
  const status = req.query.status_code
  let records = disbursements
  let totalItems = 0
  
  // filter
  if (status) {
    const statuses = status.split(',')
    records = disbursements.filter(d => statuses.includes(d.last_status))
    totalItems = records.length
  }

  // page
  records = records.slice(0, 10)
  
  setTimeout(() => {
    res.status(200).json({
      metadata: {
        page: 1,
        per_page: 10,
        page_count: 10,
        total_count: totalItems,
      },
      records,
    })
  }, 1000)
})

router.get('/commission-summary', function (_, res) {
  res.json({
    commission_to_paid: 69420000,
    total_agent: 69,
  })
})

router.get('/agents', function (_, res) {
  res.json(agents)
})

router.get('/programs', function (_, res) {
  res.json(programs)
})

router.get('/:id', function (_, res) {
  res.json(disbursements[0])
})

router.post('/:id', function (_, res) {
  res.json({
    message: 'OK'
  })
})

module.exports = router
