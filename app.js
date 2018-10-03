const express = require("express");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb://localhost/rotten-potatoes",
  { useMongoClient: true }
);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const reviews = require("./controllers/reviews")(app);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
