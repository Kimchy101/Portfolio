// file: hooks/index.js
const render = require('./render')

module.exports = nuxtConfig => ({
  render: render(nuxtConfig)
})