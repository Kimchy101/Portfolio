const express = require('express')
const cors = require('cors')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  const serverIP = `http://${host}:${port}`
  const corsOptions = {origin: serverIP, optionsSuccessStatus: 200}

  app.get('/userPosts', cors(), 
    (req, res, next) => {
      res.send({name: 'Andrew', quote: 'I don\'t like fruit'})
    }
  )

  // Give nuxt middleware to express
  app.use(nuxt.render)
  
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on ${serverIP}`,
    badge: true
  })
}
start()