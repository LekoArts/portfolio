import config from '../../config/website'
import i18n from '../../config/i18n'

describe('SEO English', () => {
  beforeEach(() => {
    cy.visit('/en').waitForRouteChange()
  })
  it('Contains general title tag', () => {
    cy.get('head title').should('contain', i18n['en-gb'].siteTitle)
  })
  it('Contains general description', () => {
    cy.get('head meta[name="description"]').should('have.attr', 'content', i18n['en-gb'].siteDescription)
  })
  it('Contains general og:url', () => {
    cy.get('head meta[property="og:url"').should('have.attr', 'content', `${config.siteUrl}/${i18n['en-gb'].path}`)
  })
  it('Contains general og:image', () => {
    cy.get('head meta[property="og:image"').should('have.attr', 'content', `${config.siteUrl}/social/banner_en-gb.jpg`)
  })
  it('Contains correct alternative lang URL', () => {
    cy.get('head link[hreflang="de"]')
      .should('have.attr', 'href', `${config.siteUrl}`)
      .visit('/en/blog')
      .get('head link[hreflang="de"]')
      .should('have.attr', 'href', `${config.siteUrl}/blog`)
  })
  it('Contains x-default alternative URL to current page', () => {
    cy.get('head link[hreflang="x-default"]')
      .should('have.attr', 'href', `${config.siteUrl}/en`)
      .visit('/en/blog')
      .get('head link[hreflang="x-default"]')
      .should('have.attr', 'href', `${config.siteUrl}/en/blog`)
  })
})
