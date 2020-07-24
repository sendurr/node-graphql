"use strict"
const express = require('express');
const app = express();

const routes = require("./routes");
routes.getRoutes(app);

app.listen(3000, () => console.log("App is running on port 3000.."));