import config from '../../config/website'
import i18n from '../../config/i18n'

describe('SEO German', () => {
  beforeEach(() => {
    cy.visit('/')
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
    cy.get('head meta[property="og:image"').should('have.attr', 'content', `${config.siteUrl}/social/banner.jpg`)
  })
})
