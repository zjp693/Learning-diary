export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'day2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/less/base.less'],

  buildModules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    less: ['~/assets/less/variables.less']
  },
  // // css 配置预处理
  // buildModules: [
  //   '@nuxtjs/style-resources'
  // ],
  // // global style resources 配置全局less变量
  // styleResources: {
  //   less: ['~/assets/less/variables.less']
  // },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
