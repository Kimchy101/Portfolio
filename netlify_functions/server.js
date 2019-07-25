'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/userPosts', (req, res) => {
  res.json({name: 'Andrew', quote: 'like pie'})
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = (true)? serverless(app) : module.exports.handler;