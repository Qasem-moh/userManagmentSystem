const express = require('express');
const exphbs = require('express-handlebars'); // updated to 6.0.Xconst bodyParser = require('body-parser');
const mysql = require('mysql');
const bodyParser = require('body-parser');  // Remove
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3020;

//use body-parser
app.use(bodyParser.urlencoded({ extended: false }))

//parse application /json
app.use(bodyParser.json());

//static files
app.use(express.static('public'));

//template engine
// Update to 6.0.X
const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');


const routes = require('./server/routes/User')
app.use('/', routes);

//app listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});