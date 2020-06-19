describe('Form renders', function () {
    it('Form submits  correctly', function () {
      cy.visit('http://localhost:3000')
  
      cy.get('[data-cy=name]').type('Barbra D')
      cy.get('[data-cy=email]').type('bdejlova@email.com')
      cy.get('[data-cy=password]').type('passwordnone')
      cy.get('[data-cy=tos]').check()
      cy.get('[data-cy=submit]').click()
  
      cy.get('.userContainer').should('be.visible')
    })})