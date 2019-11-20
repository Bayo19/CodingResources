const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/jspage.ejs', (req, res, next) => {
    res.render('jspage', { pageTitle: 'Coding Resources - JavaScript', path: '/jspage' });
});


module.exports = router;