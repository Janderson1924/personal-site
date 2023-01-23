describe('navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('should navigate to/from the ABOUT route properly', () => {
    cy.findByText('About').click()
    cy.findByText('ABOUT').should('exist')
    cy.url().should('include', '/about')
    cy.findByText('Home').should('exist').click()
    cy.findByText('HOME').should('exist')
  })
  it('should navigate to/from the PROJECTS route properly', () => {
    cy.findByText('Projects').click()
    cy.findByText('PROJECTS').should('exist')
    cy.url().should('include', '/projects')
    cy.findByText('Home').should('exist').click()
    cy.findByText('HOME').should('exist')
  })
  it('should navigate to/from the BLOG & MEDIA route properly', () => {
    cy.findByText('Blog & Media').click()
    cy.findByText('BLOG & MEDIA').should('exist')
    cy.url().should('include', '/blog-and-media')
    cy.findByText('Home').should('exist').click()
    cy.findByText('HOME').should('exist')
  })
  it('should navigate to/from the CONTACT route properly', () => {
    cy.findByText('Contact').click()
    cy.findByText('CONTACT').should('exist')
    cy.url().should('include', '/contact')
    cy.findByText('Home').should('exist').click()
    cy.findByText('HOME').should('exist')
  })
})
