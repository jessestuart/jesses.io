context('Homepage', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:8000`)
  })

  it('Navigates to home page.', () => {
    cy.get('').click()
  })

  // it('has focusable buttons', () => {
  //   cy.getByText('click me').focus()
  //   cy.focused().should('have.text', 'click me')
  // })
})
