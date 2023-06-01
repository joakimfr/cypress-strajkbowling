describe('Confirmation spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.get('.input__field').eq(0).type('2023-05-31');
    cy.get('.input__field').eq(1).type('18:00');
    cy.get('.input__field').eq(2).type('1');
    cy.get('.input__field').eq(3).type('1');
    cy.get('.shoes__button').click();
    cy.get('.shoes__form').should('have.length', 1); 
    cy.get('.shoes__input').eq(0).type('42');
    cy.get('.booking__button').click();
  })

  it('ska visa en bokningsbekräftelse med korrekt information', () => {
    cy.get('.confirmation').should('exist');

    cy.wait(1000);

    cy.get('.input__field.confirmation__input').eq(0).should('have.value', '2023-05-31 18:00');
    cy.get('.input__field.confirmation__input').eq(1).should('have.value', '1');
    cy.get('.input__field.confirmation__input').eq(2).should('have.value', '1');

    cy.get('.input__field.confirmation__input').eq(3).should('exist');

    cy.get('.confirmation__price').should('contain', '220 sek');

  })

  it('Ska generera ett nytt unikt bokningsnummer vid varje ny boking', () => {

    cy.get('.input__field.confirmation__input').eq(3).should('not.contain', 'STR1508TKEK');
  })

})