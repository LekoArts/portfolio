const website = require('./website')

module.exports = {
  'de-de': {
    default: true,
    path: 'de',
    locale: 'de-de',
    htmlLang: 'de',
    ogLang: 'de_DE',
    dateFormat: 'dd.MM.yyyy',
    siteTitle: website.siteTitle,
    siteDescription: website.siteDescription,
    siteHeadline: website.siteHeadline,
    projects: 'Projekte',
    contact: 'Kontakt',
  },
  'en-gb': {
    path: 'en',
    locale: 'en-gb',
    htmlLang: 'en',
    ogLang: 'en_US',
    dateFormat: 'dd/MM/yyyy',
    siteTitle: 'LekoArts - Graphic Designer & Front-End Developer',
    siteDescription: `Hi! I'm Lennart and I'm a self-taught and passionate graphic designer & front-end developer. I design, create and develop cross-platform design concepts to get the most out of your brand.`,
    siteHeadline: 'Graphic Designer & Front-End Developer',
    projects: 'Projects',
    contact: 'Contact',
  },
}
