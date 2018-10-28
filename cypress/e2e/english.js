describe('English', () => {
  beforeEach(() => {
    cy.visit('/en')
  })
  it('Navigation works', () => {
    cy.getByText('Projects')
      .click()
      .assertRoute('/en/projects')
      .getByText('Blog')
      .click()
      .assertRoute('/en/blog')
      .getByText('Contact')
      .click()
      .assertRoute('/en/contact')
  })
  it('Index button (Projects) work', () => {
    cy.get('a[type="primary"]')
      .should('contain', 'Projects')
      .click()
      .assertRoute('/en/projects')
  })
  it('Index button (Blog) work', () => {
    cy.get('a[type="secondary"]')
      .should('contain', 'Blog')
      .click()
      .assertRoute('/en/blog')
  })
})
