describe('homepage', () => {
  it('should render the homepage', () => {
    cy.visit('http://localhost:3000/')
    cy.findByText('HOME').should('exist')
    cy.findByText('About').should('exist')
    cy.findByText('Projects').should('exist')
    // cy.findByText('Blog & Media').should('exist') // TODO: comment in when Blog page is finished.
    cy.findByText('Contact').should('exist')
    cy.findByRole('link', { name: 'Test Button' }).should('exist')
  })
})
