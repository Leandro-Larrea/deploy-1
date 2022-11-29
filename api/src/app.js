const express = require('express');
const routes = require('./routes/index.js');
const morgan = require('morgan');
const bodyParser = require("body-parser");

const server = express()

server.use(morgan('dev'));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use("/",routes);

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

module.exports = server;