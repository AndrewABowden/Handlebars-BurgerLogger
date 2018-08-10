const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const expHandlebars = require('express-handlebars');
const handlebars = require('handlebars');


const app = express();

app.get("/", (req, res) => {
    res.send("YOU MADE IT HOME");
});

app.get("/api/user", (req, res) => {
    res.send('Users is working..');
})

db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function() {
        console.log(`Listening to ${Port}`)
    })
});

