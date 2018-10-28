describe('Switch', () => {
  it('Language Switch works', () => {
    cy.visit('/')
      .getByText('Englisch')
      .click()
      .assertRoute('/en')
      .getByText('German')
      .click()
      .assertRoute('/')
  })
})
