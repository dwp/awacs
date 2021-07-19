const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('search', function (req, res) {

  let searchNino = req.session.data['search']

  if (searchNino === 'AA112233B') {
    res.redirect('search-results')
  }
})

module.exports = router
