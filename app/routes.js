const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/01', require('./views/01/_routes'));

module.exports = router
