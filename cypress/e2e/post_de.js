describe('Blogpost', () => {
  beforeEach(() => {
    cy.visit('/blog/quicktipp-netlify-discord-webhooks')
  })
  it('Suggestions work', () => {
    cy.getByTestId('suggestion-left')
      .click({ force: true })
      .getByTestId('suggestion-right')
      .click({ force: true })
  })
  it('Blogpost footer links to patreon', () => {
    cy.getByText('Patreon').should('have.prop', 'href', 'https://www.patreon.com/lekoarts')
  })
})
