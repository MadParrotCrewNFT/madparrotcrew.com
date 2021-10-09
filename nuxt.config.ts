const siteconfig = require('./siteconfig.json')

export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Notorious Parrot Posse',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'modern-normalize/modern-normalize.css',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/responsive-vars.scss'
    ]
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/sitemap' // Always declare last
  ],
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: `${siteconfig.base_url}/sitemap.xml`
  },
  sitemap: {
    hostname: siteconfig.base_url,
    exclude: ['/_icons']
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      ogHost: siteconfig.base_url,
      ogSiteName: siteconfig.brand_name.full,
      ogType: 'website',
      twitterCard: 'summary_large_image'
    },
    manifest: {
      name: siteconfig.brand_name.full,
      short_name: siteconfig.brand_name.short,
      /* icons: handled by pwa.icons module, */
      description: '',
      start_url: '/',
      display: 'browser',
      useWebmanifestExtension: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
