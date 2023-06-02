describe('Booking form validation spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display an error message if no fields are filled', () => {
    cy.get('.booking__button').click();
    cy.get('.error-message__text').should('be.visible');
  })

  it('should display an error message if all fields are filled but the number of players and shoes does not match', () => {
    cy.get('.input__field').eq(0).type('2023-05-31').should('have.value', '2023-05-31');
    cy.get('.input__field').eq(1).type('18:00').should('have.value', '18:00');
    cy.get('.input__field').eq(2).type('4').should('have.value', '4');
    cy.get('.input__field').eq(3).type('1').should('have.value', '1');

    cy.get('.shoes__button').click();
    cy.get('.shoes__input').eq(0).type('42');
    cy.get('.booking__button').click();
    cy.get('.error-message__text').should('be.visible');
  })

  it('should display an error message if alla fields are filled except one', () => {
    cy.get('.input__field').eq(0).type('2023-05-31').should('have.value', '2023-05-31');
    cy.get('.input__field').eq(1).type('18:00').should('have.value', '18:00');
    cy.get('.input__field').eq(2).type('1').should('have.value', '1');
    cy.get('.input__field').eq(3).should('have.value', '').clear();

    cy.get('.shoes__button').click();
    cy.get('.shoes__input').eq(0).type('42');
    cy.get('.booking__button').click();
    cy.get('.error-message__text').should('be.visible');

  })

  it('should remove the error message if all fields are filled correctly', () => {
    cy.get('.input__field').eq(0).type('2023-05-31').should('have.value', '2023-05-31');
    cy.get('.input__field').eq(1).type('18:00').should('have.value', '18:00');
    cy.get('.input__field').eq(2).type('1').should('have.value', '1');
    cy.get('.input__field').eq(3).type('1').should('have.value', '1');

    cy.get('.shoes__button').click();
    cy.get('.shoes__input').eq(0).type('42');
    cy.get('.booking__button').click();
    cy.get('.error-message__text').should('not.exist');
  })

})