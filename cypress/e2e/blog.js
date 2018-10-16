/* globals cy */

describe('Blog', () => {
  it('Cover links to Blogpost', () => {
    cy.visit('/blog')
      .getByTitle('Quicktipp: Netlify + Discord')
      .click()
      .getByText('Quicktipp: Netlify + Discord')
      .should('exist')
  })
  it('Title links to Blogpost', () => {
    cy.visit('/blog')
      .getByText('Quicktipp: Netlify + Discord')
      .click()
      .getByText('Quicktipp: Netlify + Discord')
      .should('exist')
  })
  it('Category links to overview of that Category', () => {
    cy.visit('/blog')
      .getByText('Quicktipp')
      .click()
      .getByTestId('header-title')
      .should('contain', 'Quicktipp')
      .getByText('Quicktipp: Netlify + Discord')
      .should('exist')
  })
  it('Tag in the Blogpost links to overview of that Tag', () => {
    cy.visit('/blog')
      .getByText('Quicktipp: Netlify + Discord')
      .click()
      .getByTestId('tag-Discord')
      .click()
      .getByTestId('header-title')
      .should('contain', 'Discord')
      .getByText('Quicktipp: Netlify + Discord')
      .should('exist')
  })
})
