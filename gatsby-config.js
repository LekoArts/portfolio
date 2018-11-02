require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const { RichText } = require('prismic-reactjs')
const Prism = require('prismjs')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-scss')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-json')
require('prismjs/components/prism-diff')
require('prismjs/components/prism-markdown')
require('prismjs/components/prism-graphql')
const config = require('./config/website')
const i18n = require('./config/i18n')

const { Elements } = RichText

// Arrays of the labels I use on Prismic.io
const codeInline = ['text']
const codeBlock = ['javascript', 'css', 'scss', 'jsx', 'bash', 'json', 'diff', 'markdown', 'graphql']

module.exports = {
  // Metadata
  siteMetadata: {
    siteUrl: config.siteUrl,
  },
  // Plugins
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[filename]--[local]',
        sourceMap: process.env.NODE_ENV !== `production`,
        hoist: process.env.NODE_ENV === `production`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'lekoarts',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: () => doc => {
          // Give the project/blog links the appropriate language path
          const prefix = i18n[doc.lang].default ? `/` : `/${i18n[doc.lang].path}/`

          // Since the uid needs to be unique and the pathname is done by Gatsby (src/pages)
          // the single pages (e.g. /contact) have names of the following pattern:
          // DE: contact-de-de
          // EN: contact-en-gb
          // Therefore I slice the "-de-de" / "-en-gb" part
          const singlePagePath = `${doc.uid}`.slice(0, -6)

          if (doc.type === 'projekt') return `${prefix}projects/${doc.uid}`
          if (doc.type === 'blogpost') return `${prefix}blog/${doc.uid}`

          return `${prefix}${singlePagePath}`
        },
        // PrismJS highlighting for labels and slices
        htmlSerializer: () => (type, element, content) => {
          switch (type) {
            case Elements.label: {
              if (codeInline.includes(element.data.label)) {
                return `<code class="language-${element.data.label}">${content}</code>`
              }
              if (element.data.label === 'quote') {
                return `<blockquote><p>${content}</p></blockquote>`
              }
              if (codeBlock.includes(element.data.label)) {
                return `<pre class="language-${element.data.label}"><code class="language-${
                  element.data.label
                }">${Prism.highlight(content, Prism.languages[element.label])}</code></pre>`
              }
              return null
            }
            case Elements.preformatted: {
              if (codeBlock.includes(element.label)) {
                return `<pre class="language-${element.label}"><code class="language-${
                  element.label
                }">${Prism.highlight(element.text, Prism.languages[element.label])}</code></pre>`
              }
              return null
            }
            default: {
              return null
            }
          }
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
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
        name: i18n['de-de'].siteTitle,
        short_name: config.siteShortName,
        lang: 'de-DE',
        description: i18n['de-de'].siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone', // standalone is the right choice here!
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
