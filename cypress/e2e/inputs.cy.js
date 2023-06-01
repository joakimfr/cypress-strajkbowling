describe('Bokningssida', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/') 
  })

  it('ska visa ett formulär med datum, tid och antal spelare', () => {
    cy.wait(1000);
    cy.get('.input__field').eq(0).should('exist')
    cy.get('.input__field').eq(1).should('exist')
    cy.get('.input__field').eq(2).should('exist')
    cy.get('.input__field').eq(3).should('exist')
  })

  it('ska kunna fylla i värden i inputfälten', () => {
    cy.wait(1000);
    cy.get('.input__field').eq(0).type('2023-05-31');
    cy.get('.input__field').eq(1).type('18:00');
    cy.get('.input__field').eq(2).type('4');
    cy.get('.input__field').eq(3).type('1');

  })

  it('ska finnas en knapp för att skicka bokningen', () => {
    cy.wait(1000);
    cy.get('.booking__button').should('exist');
  })
})