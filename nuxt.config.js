module.exports = {
  ssr: false,
  head: {
    titleTemplate: "%s",
    title: "FrameWork",
    htmlAttrs: {
      lang: "ko"
    },
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: ""}
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"}
    ]
  },

  css: [
    "~assets/css/SpoqaHanSansNeo.css",
  ],

  plugins: [
    "~/plugins/axios",
    "~/plugins/jqxGrid",
    "~/plugins/routerTab",
    "~/plugins/session",
    "~/plugins/eChart",
  ],
  router: {
    middleware: ["middleRouter"],
    extendRoutes(routes, resolve) {
      routes.push({
        name: "iframe",
        path: "/iframe/:src/:title?/:icon?",
        component: resolve(__dirname, "pages/-Iframe.js"),
        props: true
      });
    }
  },

  components: true,

  buildModules: [
    "@nuxtjs/vuetify",
    "@nuxt/postcss8",
  ],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/dayjs",
    "@nuxtjs/style-resources",
    "@nuxtjs/i18n",
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", {targets: "defaults"}]],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  },

  styleResources: {
    scss: ["~assets/scss/common.scss", "./assets/scss/*.scss"]
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:8080',
      changeOrigin: true
    }
  },

  axios: {
    proxy: true,
    headers: {
      common: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }
  },

  dayjs: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
    defaultTimeZone: "Asia/Seoul",
    plugins: [
      "utc",
      "timezone"
    ]
  },

  i18n: {
    locales: [
      { code: 'ko', name: 'Korean', iso: 'ko-KR', file: 'ko/ko.js' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en/en.js' },
    ],
    defaultLocale: 'ko',
    langDir: 'locales/',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'ko',
    },
    lazy: false,
    vueI18nLoader: true,
    vuex: false,
  },

  vuetify: {
    lang: {
      locales: ["ko", "en"],
      current: "ko"
    },
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    optionsPath: "~/plugins/vuetify.js"
  },

  build: {
    transpile: [/echarts/, /zrender/, /vue-router-tab/],
    styleResources: {
      scss: "./assets/scss/**/*.scss"
    },
    publicPath: '/_nuxt/'
  }
};
