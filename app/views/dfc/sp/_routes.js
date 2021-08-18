const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/search', function (req, res) {

  let searchNino = req.session.data['search']

  if (searchNino === 'AA112233B') {
    res.redirect('../search-results')
  }
  else if (searchNino === 'AA 11 22 33 B') {
    res.redirect('../search-results')
  }
})


router.post('/anita-nalini/completed-no', function (req, res) {

    // Make a variable and give it the value from 'juggling-balls'
    var taskCompleted = req.session.data['task-completed']

    // Check whether the variable matches a condition
    if (taskCompleted == "no"){
      // Send user to next page
      res.redirect('response')
    } else {
      // Send user to ineligible page
      res.redirect('home-success')
    }

  })

  router.post('/jane-doe/completed-no', function (req, res) {

      var taskCompleted = req.session.data['task-completed']

      if (taskCompleted == "no"){
        // Send user to next page
        res.redirect('response')
      } else {
        // Send user to ineligible page
        res.redirect('home-success')
      }

    })

module.exports = router
