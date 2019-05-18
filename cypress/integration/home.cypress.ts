/**
 *
 *
 */
context('Homepage', () => {
  afterEach(() => {
    cy.screenshot()
  })

  it('can render Homepage.', () => {
    cy.visit('/')
    // eslint-disable-next-line
    cy.wait(1000)
    cy.contains("Hi — I'm Jesse.")
    cy.percySnapshot('homepage', { enableJavaScript: true })
  })

  it('can navigate to About page.', () => {
    cy.get('.site-header')
      .find('a')
      .last()
      .should('contain', 'about')
      .click()
    // eslint-disable-next-line
    cy.wait(1000)
    cy.url().should('eq', 'http://localhost:8000/about')
    cy.percySnapshot('about', { enableJavaScript: true })
  })
})
