const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const sequelize = require('sequelize');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3005;

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

//Static files
app.use(express.static('public'));

//Templating Engine
app.engine('.hbs', exphbs.engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');


//Router
app.get('', (req, res) => {
    res.render('home');
});


app.listen(port, () => console.log(`Listening on port ${port}`));