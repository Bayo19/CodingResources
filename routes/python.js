const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/pythonpage.ejs', (req, res, next) => {
    res.render('pythonpage', { pageTitle: 'Coding Resources - Python', path: '/pythonpage' });
});


module.exports = router;