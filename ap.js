const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const htmlData = require('./routes/htmlpage.js');
const jsData = require('./routes/jspage.js')
const indexPage = require('./routes/index.js');
const nodePage = require('./routes/nodePage.js');
const tools = require('./routes/tools.js');
const ruby = require('./routes/ruby.js');
const about = require('./routes/about.js');
const python = require('./routes/python.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexPage);
app.use(htmlData);
app.use(jsData);
app.use(nodePage);
app.use(tools);
app.use(ruby);
app.use(about);
app.use(python);
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: '404 - Page Not Found' });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`We Are Listening at ${port}`);
});