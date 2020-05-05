describe('Switch', () => {
  it('Language Switch works', () => {
    cy.visit('/')
      .waitForRouteChange()
      .findByText('Englisch')
      .click()
      .waitForRouteChange()
      .assertRoute('/en')
      .findByText('German')
      .click()
      .waitForRouteChange()
      .assertRoute('/')
  })
})
