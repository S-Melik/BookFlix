const express = require('express')
const router = express.Router()


// create a route
router.get('/', (req, res) => {
    // render index.ejs
    res.render('index')
})

module.exports = router