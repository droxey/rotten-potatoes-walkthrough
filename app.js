const express = require("express");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rotten-potatoes");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const reviews = require("./controllers/reviews")(app);

app.listen(port, () => {
  console.log("App listening on port 3000!");
});

module.exports = app;
