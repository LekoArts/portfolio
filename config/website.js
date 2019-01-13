const meta = {
  // Metadata
  // Finds usage in gatsby-config, i18n, and SEO component
  siteTitle: 'LekoArts - Kommunikationsdesigner & Front-End Entwickler',
  siteDescription:
    'Hi! Ich heiße Lennart und bin sowohl autodidaktischer als auch leidenschaftlicher Kommunikationsdesigner & Front-End Entwickler. Ich entwerfe, gestalte und entwickle plattformübergreifende Design-Konzepte, um das volle Potential aus deiner Marke herauszuholen.',
  siteHeadline: 'Kommunikationsdesigner & Front-End Entwickler',
  siteTitleAlt: 'LekoArts',
  siteShortName: 'LekoArts',
  siteUrl: 'https://www.lekoarts.de', // No trailing slash!
}

const social = {
  siteLogo: `${meta.siteUrl}/social/avatar.png`,
  siteLogoSmall: `${meta.siteUrl}/social/avatar_small.png`,
  siteBanner: `${meta.siteUrl}/social/banner_`, // Locale ending + filetype gets added in SEO component
  siteBannerWidth: '776',
  siteBannerHeight: '382',
  twitter: '@lekoarts_de',
  facebook: 'lekoarts.de',
}

const website = {
  ...meta,
  ...social,
  googleAnalyticsID: 'UA-47519312-1',

  // Manifest
  themeColor: '#3498DB',
  backgroundColor: '#2e3246',
}

module.exports = website
