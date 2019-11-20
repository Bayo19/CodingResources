const path = require('path');

const express = require('express');

const rootdir = require('../util/path');

const router = express.Router();

router.get('/about.ejs', (req, res, next) => {
    res.render('about', { pageTitle: 'Coding Resources - About', path: '/about' });
});

module.exports = router;