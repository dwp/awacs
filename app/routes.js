const express = require('express')
const router = express.Router()

// Validation routing depending on sort code that's entered
router.use('/01', require('./views/01/_routes'));
router.use('/02', require('./views/02/_routes'));
router.use('/warbreck-testing-august', require('./views/warbreck-testing-august/_routes'));

module.exports = router
