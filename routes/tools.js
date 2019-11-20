const path = require('path');

const express = require('express');

const rootdir = require('../util/path');

const router = express.Router();

router.get('/tools.ejs', (req, res, next) => {
    res.render('tools', { pageTitle: 'Coding Resources - Tools', path: '/tools' });
});

module.exports = router;