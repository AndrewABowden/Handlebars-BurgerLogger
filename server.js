const express = require('express');
const bodyParser = require('body-parser');

const handlebars = require('handlebars');
const app = express();
var PORT = process.env.PORT || 8080;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerControl.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});



// app.get("/", (req, res) => {
//     res.send("YOU MADE IT HOME");
// });

// app.get("/api/user", (req, res) => {
//     res.send('Users is working..');
// })

// app.listen(PORT, function() {
//     console.log(`Listening to ${Port}`)
// //db.sequelize.sync({force: true}).then(function(){
//     })
// //}});

