import siteconfig from './siteconfig.json'

const metaDescription = "Mad Parrot Crew consists of 10,000 unique parrot NFTs living on the Ethereum blockchain."

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
      { hid: 'description', name: 'description', content: metaDescription },
      { hid: 'og:description', name: 'og:description', content: metaDescription },
      { hid: 'og:locale', name: 'og:locale', content: 'en_GB' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:host', name: 'og:host', content: siteconfig.base_url },
      { hid: 'og:image', name: 'og:image', content: `${siteconfig.base_url}/og-image.png` },
      { hid: 'og:image:alt', name: 'og:image:alt', content: 'Mad Parrot Crew NFT' },
      { hid: 'og:image:width', name: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', name: 'og:image:height', content: '630' },
      { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@madparrotcrew' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@madparrotcrew' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'color-scheme', name: 'color-scheme', content: 'light' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/_nuxt/assets/fonts/Montserrat/Montserrat-Regular.woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/_nuxt/assets/fonts/Montserrat/Montserrat-Bold.woff2',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/_nuxt/assets/fonts/LuckiestGuy/LuckiestGuy.woff2',
        crossorigin: true,
      }
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
    '@nuxtjs/style-resources',
    '@nuxt/image'
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
  image: {
    screens: {
      smallmobile: 340,
      standardmobile: 390,
      largemobile: 450,
      smalltablet: 640,
      standardtablet: 768,
      largetablet: 1000,
      smalldesktop: 1366,
      standarddesktop: 1920,
      largedesktop: 2880,
      '4kdesktop': 3840
    }
  },
  modules: [
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      font: () => '[path][name].[ext]'
    }
  }
}
