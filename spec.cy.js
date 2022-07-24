describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://student2.photostudy.co/')

    cy.get('[data-testid="signup-preset-button"]').click()

    cy.get('[data-testid="email-input"]').click().type('phamquoch+789@gotitapp.co{enter}')
  
    cy.get('[data-testid="password-input"]').click().type('QAgotit789{enter}')
  })
})