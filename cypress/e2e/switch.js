describe('Switch', () => {
  it('Language Switch works', () => {
    cy.visit('/').waitForRouteChange()
    cy.findByText('Englisch').click().waitForRouteChange().assertRoute('/en')
    cy.findByText('German').click().waitForRouteChange().assertRoute('/')
  })
})
