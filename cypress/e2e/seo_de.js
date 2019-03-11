import config from '../../config/website'
import i18n from '../../config/i18n'

describe('SEO German', () => {
  beforeEach(() => {
    cy.visit('/').waitForRouteChange()
  })
  it('Contains general title tag', () => {
    cy.get('head title').should('contain', i18n['de-de'].siteTitle)
  })
  it('Contains general description', () => {
    cy.get('head meta[name="description"]').should('have.attr', 'content', i18n['de-de'].siteDescription)
  })
  it('Contains general og:url', () => {
    cy.get('head meta[property="og:url"').should('have.attr', 'content', config.siteUrl)
  })
  it('Contains general og:image', () => {
    cy.get('head meta[property="og:image"').should('have.attr', 'content', `${config.siteUrl}/social/banner_de-de.jpg`)
  })
  it('Contains correct alternative lang URL', () => {
    cy.get('head link[hreflang="en"]')
      .should('have.attr', 'href', `${config.siteUrl}/en`)
      .visit('/blog')
      .get('head link[hreflang="en"]')
      .should('have.attr', 'href', `${config.siteUrl}/en/blog`)
  })
  it('Contains x-default alternative URL to English version', () => {
    cy.get('head link[hreflang="x-default"]')
      .should('have.attr', 'href', `${config.siteUrl}/en`)
      .visit('/blog')
      .get('head link[hreflang="x-default"]')
      .should('have.attr', 'href', `${config.siteUrl}/en/blog`)
  })
})
