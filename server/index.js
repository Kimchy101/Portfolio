
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

  const clientURL = `http://${host}:${port}`

  const corsOptions = {origin: clientURL + 'userQuotes', optionsSuccessStatus: 200}
  // Give nuxt middleware to express
  app.use(cors(), nuxt.render)
  
  app.get("/user", (req, res, next) => {console.log("success"); res.send("Carl")})

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on ${clientURL}`,
    badge: true
  })


}
start()
