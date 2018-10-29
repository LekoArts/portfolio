import config from '../../config/website'
import i18n from '../../config/i18n'

describe('SEO English', () => {
  beforeEach(() => {
    cy.visit('/en')
  })
  it('Contains general title tag', () => {
    cy.get('head title').should('contain', i18n['en-gb'].translation.siteTitle)
  })
  it('Contains general description', () => {
    cy.get('head meta[name="description"]').should('have.attr', 'content', i18n['en-gb'].translation.siteDescription)
  })
  it('Contains general og:url', () => {
    cy.get('head meta[property="og:url"').should('have.attr', 'content', `${config.siteUrl}/${i18n['en-gb'].path}`)
  })
  it('Contains general og:image', () => {
    cy.get('head meta[property="og:image"').should('have.attr', 'content', `${config.siteUrl}/social/banner.jpg`)
  })
})
