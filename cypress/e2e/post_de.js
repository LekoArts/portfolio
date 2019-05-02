describe('Blogpost', () => {
  beforeEach(() => {
    cy.visit('/blog/quicktipp-netlify-discord-webhooks').waitForRouteChange()
  })
  it('Suggestions show', () => {
    cy.getByTestId('suggestion-left').getByTestId('suggestion-right')
  })
  it('Blogpost footer links to patreon', () => {
    cy.get('[data-testid="optional-content"]').within(() => {
      cy.getByText('Patreon').should('have.prop', 'href', 'https://www.patreon.com/lekoarts')
    })
  })
})
