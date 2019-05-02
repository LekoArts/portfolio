import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import locales from '../../config/i18n'

const replaceTrailing = _path => _path.replace(/\/$/, ``)

const Head = props => {
  const { i18n, postNode, pathname, article, project, data } = props
  const { buildTime, config } = data.site

  const localizedPath = locales[i18n.locale].default ? '' : `/${locales[i18n.locale].path}`
  const isGerman = !!locales[i18n.locale].default
  const homeURL = `${config.siteUrl}${localizedPath}`
  const URL = `${config.siteUrl}${replaceTrailing(pathname)}`
  const isBlog = URL === `${homeURL}/blog`
  const slicedPathname = pathname === '/en' ? '/' : `${pathname}`.slice(3)
  const alternate = isGerman ? replaceTrailing(`/en${pathname}`) : replaceTrailing(slicedPathname)
  const alternateURL = `${config.siteUrl}${alternate}`

  let title
  let description
  let image
  let imageWidth
  let imageHeight

  if (article) {
    const postMeta = postNode.data
    const postImage = postMeta.cover.localFile.childImageSharp.resize

    title = project
      ? `${postMeta.customer}: ${postMeta.title.text} – ${i18n.projects} | ${config.siteTitleAlt}`
      : `${postMeta.title.text} – Blog | ${config.siteTitleAlt}`
    description = `${postNode.fields.excerpt}...`
    image = `${config.siteUrl}${postImage.src}`
    imageWidth = postImage.width
    imageHeight = postImage.height
  } else {
    title = i18n.siteTitle
    description = i18n.siteDescription
    image = `${config.siteBanner}${i18n.locale}.jpg`
    imageWidth = config.siteBannerWidth
    imageHeight = config.siteBannerHeight
  }

  const orgaCreator = input => ({
    '@context': 'http://schema.org',
    '@id': `${config.siteUrl}/#${input}`,
    '@type': 'Organization',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE',
      addressLocality: '',
      postalCode: '',
    },
    name: i18n.siteTitle,
    alternateName: config.siteTitleAlt,
    description: i18n.siteDescription,
    url: homeURL,
    email: 'hello@lekoarts.de',
    founder: 'LekoArts',
    foundingDate: '2017-12-08',
    foundingLocation: 'Germany',
    image: {
      '@type': 'ImageObject',
      url: config.siteLogo,
      height: '512',
      width: '512',
    },
    logo: {
      '@type': 'ImageObject',
      url: config.siteLogoSmall,
      height: '60',
      width: '60',
    },
    sameAs: [
      'https://github.com/LekoArts',
      'https://www.instagram.com/lekoarts.de',
      'https://www.behance.net/lekoarts',
      'https://dribbble.com/LekoArts',
      'https://youtube.de/LekoArtsDE',
      'https://twitter.com/lekoarts_de',
    ],
  })

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': isBlog ? 'Blog' : 'WebPage',
    url: URL,
    headline: i18n.siteHeadline,
    inLanguage: i18n.htmlLang,
    mainEntityOfPage: URL,
    description: i18n.siteDescription,
    name: i18n.siteTitle,
    author: {
      '@id': `${config.siteUrl}/#identity`,
    },
    copyrightHolder: {
      '@id': `${config.siteUrl}/#identity`,
    },
    copyrightYear: '2017',
    creator: {
      '@id': `${config.siteUrl}/#creator`,
    },
    publisher: {
      '@id': `${config.siteUrl}/#creator`,
    },
    datePublished: '2017-12-08',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }

  let schemaArticle = null

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': homeURL,
        name: 'Homepage',
      },
      position: 1,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${homeURL}/projects`,
        name: 'Projects',
      },
      position: 2,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${homeURL}/blog`,
        name: 'Blog',
      },
      position: 3,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${homeURL}/contact`,
        name: 'Contact',
      },
      position: 4,
    },
  ]

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@id': `${config.siteUrl}/#identity`,
      },
      copyrightHolder: {
        '@id': `${config.siteUrl}/#identity`,
      },
      copyrightYear: postNode.first_publication_date,
      creator: {
        '@id': `${config.siteUrl}/#creator`,
      },
      publisher: {
        '@id': `${config.siteUrl}/#creator`,
      },
      datePublished: postNode.first_publication_date,
      dateModified: postNode.last_publication_date,
      description,
      headline: title,
      inLanguage: i18n.htmlLang,
      url: URL,
      name: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      mainEntityOfPage: URL,
    }
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': URL,
        name: title,
      },
      position: 5,
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <Helmet>
      <html lang={i18n.htmlLang} />
      <title>{title}</title>
      <link rel="alternate" hrefLang="x-default" href={isGerman ? alternateURL : URL} />
      {!article && <link rel="alternate" hrefLang={isGerman ? 'de' : 'en'} href={URL} />}
      {!article && <link rel="alternate" hrefLang={isGerman ? 'en' : 'de'} href={alternateURL} />}
      <meta httpEquiv="content-language" content={i18n.locale} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#343849" />
      <meta name="msapplication-TileColor" content="#3498db" />
      <meta property="og:locale" content={i18n.ogLang} />
      <meta property="og:site_name" content={config.facebook} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:see_also" content="https://github.com/LekoArts" />
      <meta property="og:see_also" content="https://www.instagram.com/lekoarts.de" />
      <meta property="og:see_also" content="https://www.behance.net/lekoarts" />
      <meta property="og:see_also" content="https://dribbble.com/LekoArts" />
      <meta property="og:see_also" content="https://youtube.de/LekoArtsDE" />
      <meta property="og:see_also" content="https://twitter.com/lekoarts_de" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      <meta name="twitter:image:width" content={imageWidth} />
      <meta name="twitter:image:height" content={imageHeight} />
      {article && <meta name="twitter:label1" value={project ? 'Customer' : 'Time To Read'} />}
      {article && (
        <meta name="twitter:data1" value={project ? postNode.data.customer : `${postNode.fields.timeToRead} Minutes`} />
      )}
      {article && <meta name="twitter:label2" value={project ? 'Task' : 'Category'} />}
      {article && (
        <meta
          name="twitter:data2"
          value={project ? postNode.data.task : postNode.data.category.document[0].data.kategorie}
        />
      )}
      {article && <meta name="article:published_time" content={postNode.first_publication_date} />}
      <link type="text/plain" href={`${config.siteUrl}/humans.txt`} rel="author" />
      {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
      {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(orgaCreator('identity'))}</script>
      <script type="application/ld+json">{JSON.stringify(orgaCreator('creator'))}</script>
    </Helmet>
  )
}

const SEO = props => <StaticQuery query={querySEO} render={data => <Head {...props} data={data} />} />

export default SEO

Head.propTypes = {
  i18n: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  project: PropTypes.bool,
  postNode: PropTypes.object,
  article: PropTypes.bool,
}

Head.defaultProps = {
  project: false,
  postNode: null,
  article: false,
}

const querySEO = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      config: siteMetadata {
        siteTitle
        siteTitleAlt
        siteDescription
        siteShortName
        siteUrl
        siteLogo
        siteLogoSmall
        siteBanner
        siteBannerWidth
        siteBannerHeight
        twitter
        facebook
      }
    }
  }
`
