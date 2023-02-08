const express = require('express')
const router = express.Router()

router.get('/', function (_, res) {
  res.status(200).json({
    metadata: {
      page: 1,
      per_page: 10,
      page_count: 10,
      total_count: 95,
    },
    records: [
      {
        id: 123,
        conversion_id: 21234750,
        company_id: 67693,
        sso_company_id: '212a21bd-d20a-4f22-a545-26ca789241e7',
      },
    ],
  })
})

router.get('/commission-summary', function (_, res) {
  res.json({
    commission_to_paid: 123,
    total_agent: 123,
  })
})

router.get('/agents', function (_, res) {
  res.json([
    {
      affiliate_id: 'agenta',
      affiliate_name: 'Agent A',
    },
    {
      affiliate_id: 'agentb',
      affiliate_name: 'Agent B',
    }
  ])
})

router.get('/programs', function (_, res) {
  res.json([
    {
      program_id: "talenta-referral-program",
      program_title: "Talenta Referral Program"
    },
    {
      program_id: "qontak-referral-program",
      program_title: "Qontak Referral Program"
    },
    {
      program_id: "jurnal-referral-program",
      program_title: "Jurnal Referral Program"
    },
  ])
})

router.get('/:id', function (_, res) {
  res.json({
    id: 1,
    conversion_id: 21234750,
    company_id: 67693,
    sso_company_id: "212a21bd-d20a-4f22-a545-26ca789241e7",
    external_id: "SP-321001",
    affiliate_address: "jakarta",
    total_amount: 123000,
    source: "zoho",
    package: "Enterprise",
    subcription_period_in_months: 3,
    company_name: "Lead A",
    tax_implies: 0.025,
    commission_before_tax: 22162,
    commission_tax: 554,
    commission_nett: 21608,
    commission_type: "regular",
    notes: "",
    last_sync_at: "2023-01-18 17:10:34.05894",
    last_status : "tax_approved",
    created_at: "2023-01-18 17:10:34.05894",
    updated_at: "2023-01-18 17:10:34.05894",
    relationships: {
      disbursement_history: {
        data: [
          {
            status_code: "need_tax_review",
            notes: "",
            created_by: "Firman S",
            created_at: "2023-01-18 17:10:34.05894"
          },
          {
            status_code: "tax_approved",
            notes: "",
            created_by: "Firman S",
            created_at: "2023-01-19 17:10:34.05894"
          }
        ]
      },
      referral_affiliate: {
        data: {
          id: 123,
          affiliate_id: "uatqontak2",
          affiliate_name: "Agent Tanpa Jenis NPWP",
          affiliate_bank_code: "BCA",
          affiliate_bank_account_number: "4332424324",
          affiliate_identity_type: "KTP",
          affiliate_identity_no: "3525015201880002",
        }
      },
      referral_program: {
        data: {
          id: 123,
          program_id: "qontak-referral-program",
          program_title: "Qontak Referral Program"
        }
      }
    }
  })
})

router.post('/:id', function (_, res) {
  res.json({
    message: 'OK'
  })
})

module.exports = router
