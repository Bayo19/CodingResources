const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/htmlpage.ejs', (req, res, next) => {
    res.render('htmlpage', { pageTitle: 'Coding Resources - HTML & CSS', path: '/htmlpage' });
});

module.exports = router;