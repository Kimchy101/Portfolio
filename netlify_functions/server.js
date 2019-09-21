'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();


router.get('/userPosts', (req, res) => {
  res.json({name: getRandomText(), quote: getRandomText()})
});

function getRandomText()
{
  var str = ""
  const length = Math.random() * 40
  for (let i = 0; i < length; i++) 
  {
    str += Math.random().toString(36).substring(7) + " ";
  }
  return str;
}

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = 
  (true)? // set this to true for deployment, false for testing...
  serverless(app) : module.exports.handler;