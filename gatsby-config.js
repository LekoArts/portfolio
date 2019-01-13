require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  siteTitle,
  siteTitleAlt,
  siteDescription,
  siteShortName,
  siteUrl,
  siteLogo,
  siteLogoSmall,
  siteBanner,
  siteBannerWidth,
  siteBannerHeight,
  twitter,
  facebook,
  themeColor,
  backgroundColor,
  googleAnalyticsID,
} = require('./config/website')
const prismicLinkResolver = require('./src/gatsby/linkResolver')
const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer')

module.exports = {
  // Metadata
  siteMetadata: {
    siteTitle,
    siteTitleAlt,
    siteDescription,
    siteShortName,
    siteUrl,
    siteLogo,
    siteLogoSmall,
    siteBanner,
    siteBannerWidth,
    siteBannerHeight,
    twitter,
    facebook,
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
        trackingId: googleAnalyticsID,
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
        name: siteTitle,
        short_name: siteShortName,
        lang: 'de-DE',
        description: siteDescription,
        start_url: '/',
        background_color: backgroundColor,
        theme_color: themeColor,
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
