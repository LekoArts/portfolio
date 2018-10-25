import config from '../../config/website'

describe('Project', () => {
  beforeEach(() => {
    cy.visit('/projects/krotus-computer-produktion-einer-eigenen-tastatur')
  })
  it('Suggestions work', () => {
    cy.getByTestId('suggestion-left')
      .click()
      .getByTestId('suggestion-right')
      .click()
  })
  it('Footer links to Contact', () => {
    cy.getByText('Projekt starten')
      .click()
      .assertRoute('/contact')
  })
  it('Contains specific title tag', () => {
    cy.get('head title').should('contain', `Produktion einer eigenen Tastatur | ${config.siteTitleAlt} – Projekte`)
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
