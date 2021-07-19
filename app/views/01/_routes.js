const express = require('express')
const router = express.Router()


router.post('/unhappy-path', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const caseUpdated = req.session.data['case-updated']

  if (caseUpdated === 'no') {
    res.redirect('/add-a-response')
  } else {
    res.redirect('/docs/examples/branching/over-18')
  }
})

module.exports = router
