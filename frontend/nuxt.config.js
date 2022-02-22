export default {
  head: {
    title: 'Short URL - Encurtador de URL Vue',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ],
  },

  css: ['@/assets/css/extras.css', '@/assets/css/dashboard.css'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    "vue-toastification/nuxt",
    '@nuxtjs/auth'
  ],

  toast: {
    timeout: 2000,
    closeOnClick: false
  },

  axios: {
    baseURL: 'http://localhost:3333',
    headers: {
      'Accept': 'application/json',
      'Content': 'application/json'
    },
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth', method: 'post', propertyName: 'token' },
          user: { url: 'auth', method: 'get', propertyName: 'user' },
          logout: false
        }
      }
    }
  },

  build: {},
}
