'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

function updateDatabase(data) {
  // update the database
  return newValue;
}

app.use(bodyParser);
// app.post('/updatestate', (res, req) => {
//   const newValue = updateDatabase(res.body);
//   req.json(newValue);
// });
app.get('/api/userPosts', cors(), 
    (req, res, next) => {
      res.send({name: 'Andrew', quote: 'I don\'t like fruit'})
    }
)

module.exports.handler = serverless(app);