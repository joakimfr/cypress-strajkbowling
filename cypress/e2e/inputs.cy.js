describe('inputs spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/') 
  })

  it('should display a form with date, time and number of players', () => {
    cy.wait(1000);
    cy.get('.input__field').eq(0).should('exist')
    cy.get('.input__field').eq(1).should('exist')
    cy.get('.input__field').eq(2).should('exist')
    cy.get('.input__field').eq(3).should('exist')
  })

  it('should be able to fill in values in the input fields', () => {
    cy.wait(1000);
    cy.get('.input__field').eq(0).type('2023-05-31').should('have.value', '2023-05-31');
    cy.get('.input__field').eq(1).type('18:00').should('have.value', '18:00');
    cy.get('.input__field').eq(2).type('4').should('have.value', '4');
    cy.get('.input__field').eq(3).type('1').should('have.value', '1');
  })

  it('should have a button to submit the booking', () => {
    cy.wait(1000);
    cy.get('.booking__button').should('exist');
  })
})