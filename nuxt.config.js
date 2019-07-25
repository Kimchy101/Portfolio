const pkg = require('./package')
const config = require('./nuxt.config.js')
module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'CUBE4',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@bazzite/nuxt-netlify',
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '.netlify/functions/server'
  },

  serverMiddleware:
    (process.env.NODE_ENV === 'production')? [] : ['~/netlify_functions/server.js'],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
