context('Homepage', () => {
  it('can render Homepage.', () => {
    cy.visit('/')
    cy.contains("Hi — I'm Jesse.")
  })

  it('can navigate to About page.', () => {
    cy.get('.site-header')
      .find('a')
      .last()
      .should('contain', 'about')
      .click()
    cy.url().should('eq', 'http://localhost:8000/about')
  })
})
