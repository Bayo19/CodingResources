const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/nodePage.ejs', (req, res, next) => {
    res.render('nodePage', { pageTitle: 'Coding Resources - Node', path: '/nodePage' });
});

module.exports = router;