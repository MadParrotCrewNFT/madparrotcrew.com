import siteconfig from './siteconfig.json'
import config from './config.json'

export default {
  target: 'static',
  head: {
    title: siteconfig.brand_name,
    htmlAttrs: {
      lang: 'en-GB'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'color-scheme', name: 'color-scheme', content: 'light' }
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
    '@nuxtjs/google-analytics',
    '@nuxtjs/style-resources'
  ],
  googleAnalytics: {
    id: 'UA-215627717-1',
    dev: process.env.NODE_ENV === 'development'
  },
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
      description: "Mad Parrot Crew consists of 10,000 unique parrot NFTs living on the Ethereum blockchain.",
      ogHost: siteconfig.base_url,
      ogSiteName: siteconfig.brand_name,
      ogType: 'website',
      ogImage: {
        path: '/og-image.png',
        width: '1200',
        height: '630',
        type: 'image/png'
      },
      twitterCard: 'summary_large_image',
      twitterSite: config.SOCIAL.TWITTER
    },
    manifest: {
      name: siteconfig.brand_name,
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
