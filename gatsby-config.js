const config = require('./config/website');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
  /* General Information */
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/${config.blogPostDir}`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projekte',
        path: `${__dirname}/content/${config.projectPostDir}`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.1 74.1" height="18" width="18">
  <path d="M41.5 55.3c.9 0 1.3 1.1.7 1.7L30.3 68.9c-6.9 6.9-18.2 7-25.1.1v-.1c-6.9-7-6.8-18.2.1-25.1l15.2-15.2c6.9-6.9 18.2-7 25.1-.1.6.6 1.2 1.3 1.7 2 .3.4.2.9-.1 1.3l-3.5 3.5c-1.2 1.2-2.9 1.6-4.2.5-5.2-4.8-9.1-3.8-12.3-.6L12 50.6c-3.2 3.2-3.2 8.4 0 11.6 3.2 3.2 8.4 3.1 11.6 0l8.2-8.2c.3-.3.7-.4 1.1-.2 2.7 1 5.6 1.6 8.6 1.5zM68.9 5.1c-7-6.9-18.2-6.8-25.1.1L31.9 17.1c-.6.6-.2 1.7.7 1.7 3-.1 5.9.5 8.7 1.6.4.1.8.1 1.1-.2l8.2-8.2c3.2-3.2 8.4-3.2 11.6 0 3.2 3.2 3.1 8.4 0 11.6L46.9 38.7c-3.2 3.2-8.4 3.2-11.6.1l-.4-.4c-1.2-1.4-3.3-.8-4.5.3l-3.5 3.5c-.3.3-.4.9-.1 1.3.5.7 1.1 1.4 1.7 2 7 6.9 18.2 6.8 25.1-.1l15.2-15.2c7-6.8 7-18 .1-25.1.1.1 0 .1 0 0z"/>
</svg>
`,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
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
    'gatsby-plugin-sitemap',
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteShortName,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'fullscreen',
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
    /* Must be placed at the end */
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
