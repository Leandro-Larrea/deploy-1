const express = require("express");
const server = require('./src/app.js');
const db = require("./src/db.js");
const port = process.env.PORT || 3000

db();
server.listen(port)
console.log("listening the best server in the world")