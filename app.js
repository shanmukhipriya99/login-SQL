//Importing packages
const express = require("express");
require("./db/db");

const app = express();
const port = process.env.PORT || 3100;

//Importing routes
const users = require("./routes/users");
const list = require("./routes/list");

//Importing middleware
app.use(express.json());
app.use(users);
app.use(list);

//Listening...
app.listen(port, () => {
    console.log("Serving on port " + port);
});
