import config from '../../config/website'

describe('Project', () => {
  beforeEach(() => {
    cy.visit('/projects/krotus-computer-produktion-einer-eigenen-tastatur').waitForRouteChange()
  })
  it('Suggestions show', () => {
    cy.findByTestId('suggestion-left')
    cy.findByTestId('suggestion-right')
  })
  it('Footer links to Contact', () => {
    cy.findByText('Projekt starten').click().waitForRouteChange().assertRoute('/contact')
  })
  it('Contains specific title tag', () => {
    cy.get('head title').should(
      'contain',
      `Krotus Computer: Produktion einer eigenen Tastatur – Projekte | ${config.siteTitleAlt}`
    )
  })
  it('Contains not the general description', () => {
    cy.get('head meta[name="description"]').should('not.have.attr', 'content', config.siteDescription)
  })
  it('Contains specific og:url', () => {
    cy.get('head meta[property="og:url"').should(
      'have.attr',
      'content',
      `${config.siteUrl}/projects/krotus-computer-produktion-einer-eigenen-tastatur`
    )
  })
  it('Contains not the general og:image', () => {
    cy.get('head meta[property="og:image"').should('not.have.attr', 'content', `${config.siteUrl}/social/banner.jpg`)
  })
})
