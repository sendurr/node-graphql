"use strict"
const express = require('express');
const app = express();

const mongo = require('mongoose');
const url = "mongodb://localhost:27017";
// const url = "mongodb://mongo:27017";
const dbName = "mydb";

mongo.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongo.connection.once('open', () => {
    console.log('connected to database');
});

mongo.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});
mongo.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});


const routes = require("./routes");
routes.getRoutes(app);

app.listen(3000, () => console.log("App is running on port 3000.."));