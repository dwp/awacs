const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/unhappy-path', function (req, res) {

  const caseUpdated = req.session.data['case-updated']

  if (caseUpdated === 'no') {
    res.redirect('add-a-response')
  } else {
    res.redirect('docs/examples/branching/over-18')
  }
})

module.exports = router
