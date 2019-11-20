const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/ruby.ejs', (req, res, next) => {
    res.render('ruby', { pageTitle: 'Coding Resources - Ruby', path: '/ruby' });
});


module.exports = router;