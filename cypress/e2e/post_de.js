describe('Blogpost', () => {
  beforeEach(() => {
    cy.visit('/blog/quicktipp-netlify-discord-webhooks').waitForRouteChange()
  })
  it('Suggestions show', () => {
    cy.findByTestId('suggestion-left').findByTestId('suggestion-right')
  })
  it('Blogpost footer links to patreon', () => {
    cy.get('[data-testid="optional-content"]').within(() => {
      cy.findByText('Patreon').should('have.prop', 'href', 'https://www.patreon.com/lekoarts')
    })
  })
})
