const bodyParser = require("body-parser");
const express = require("express");
bodyParser;
const app = express();

// parse aplication/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(3000, () => {
  console.log(`Server started on port`);
});
