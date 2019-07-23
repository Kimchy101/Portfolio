const express = require('express')
const app = express()
const cors = require('cors')
app.get('/userPosts', cors(), 
    (req, res, next) => {
      res.send({name: 'Andrew', quote: 'I don\'t like fruit'})
    }
  )
// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}