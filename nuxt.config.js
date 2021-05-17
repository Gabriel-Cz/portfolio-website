export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gabriel-Cz Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'stylesheet',  href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap"},
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"},
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: 'http://localhost:1337'
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: "http://localhost:1337"
  },
  server: {
    port: 8080
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
