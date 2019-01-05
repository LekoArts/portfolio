import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import config from '../../config/website'
import locales from '../../config/i18n'

const replaceTrailing = _path => _path.replace(/\/$/, ``)

const SEO = props => {
  const { i18n, postNode, pathname, article, project } = props

  const localizedPath = locales[i18n.locale].default ? '' : `/${locales[i18n.locale].path}`
  const isGerman = !!locales[i18n.locale].default
  const homeURL = `${config.siteUrl}${localizedPath}`
  const URL = `${config.siteUrl}${replaceTrailing(pathname)}`
  const isBlog = URL === `${homeURL}/blog`
  const slicedPathname = pathname === '/en' ? '/' : `${pathname}`.slice(3)
  const alternateURL = isGerman ? replaceTrailing(`/en${pathname}`) : replaceTrailing(slicedPathname)

  let title
  let description
  let image
  let imageWidth
  let imageHeight
  if (article) {
    const postMeta = postNode.data
    const postImage = postMeta.cover.localFile.childImageSharp.resize

    title = project
      ? `${postMeta.customer}: ${postMeta.title.text} – ${postNode.fields.sourceType} | ${config.siteTitleAlt}`
      : `${postMeta.title.text} – ${postNode.fields.sourceType} | ${config.siteTitleAlt}`
    description = `${postNode.fields.excerpt}...`
    image = `${config.siteUrl}${postImage.src}`
    imageWidth = postImage.width
    imageHeight = postImage.height
  } else {
    title = i18n.siteTitle
    description = i18n.siteDescription
    image = `${config.siteUrl}${config.siteBanner}${i18n.locale}.jpg`
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
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    description: i18n.siteDescription,
    url: homeURL,
    email: 'hello@lekoarts.de',
    founder: 'LekoArts',
    foundingDate: '2017-12-08',
    foundingLocation: 'Germany',
    image: {
      '@type': 'ImageObject',
      url: config.siteUrl + config.siteLogo,
      height: '512',
      width: '512',
    },
    logo: {
      '@type': 'ImageObject',
      url: config.siteUrl + config.siteLogoSmall,
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
    datePublished: '2017-12-08T10:30:00+01:00',
    dateModified: '2017-12-08T10:30:00+01:00',
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
      {!article && (
        <link rel="alternate" hrefLang={isGerman ? 'en-gb' : 'de'} href={`${config.siteUrl}${alternateURL}`} />
      )}
      <link rel="alternate" hrefLang="x-default" href={URL} />
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
      <link type="text/plain" href={`${config.siteUrl}/humans.txt`} rel="author" />
      {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
      {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(orgaCreator('identity'))}</script>
      <script type="application/ld+json">{JSON.stringify(orgaCreator('creator'))}</script>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  i18n: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  project: PropTypes.bool,
  postNode: PropTypes.object,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  project: false,
  postNode: null,
  article: false,
}
