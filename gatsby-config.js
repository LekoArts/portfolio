require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = require('./config/website')
const i18n = require('./config/i18n')
const prismicLinkResolver = require('./src/gatsby/linkResolver')
const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer')

module.exports = {
  // Metadata
  siteMetadata: {
    siteUrl: config.siteUrl,
  },
  // Plugins
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'lekoarts',
        accessToken: `${process.env.API_KEY}`,
        // Get the correct & localized URLs
        linkResolver: () => prismicLinkResolver,
        // PrismJS highlighting for labels and slices
        htmlSerializer: () => prismicHtmlSerializer,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        anonymize: true,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/en/offline-plugin-app-shell-fallback', '/imprint', '/en/imprint'],
      },
    },
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: i18n['de-de'].siteTitle,
        short_name: config.siteShortName,
        lang: 'de-DE',
        description: i18n['de-de'].siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    // Must be placed at the end
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
  ],
}
