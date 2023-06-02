
describe('Navigation spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });


  it('should navigate to the confirmation page from the booking page', () => {
    cy.get('.navigation__icon').should('be.visible');
    cy.get('.navigation__icon').click();
    cy.get('.navigation__link').should('contain', 'Confirmation');
    cy.contains('.navigation__link', 'Confirmation').click();
    cy.url().should('include', '/confirmation') 
  })

  it('should navigate to the booking page from the confirmation page', () => {
    cy.get('.navigation__icon').click();
    cy.get('.navigation__link').should('contain', 'Confirmation');
    cy.contains('.navigation__link', 'Confirmation').click();
    cy.url().should('include', '/confirmation') 

    cy.get('.navigation__icon').should('be.visible');
    cy.get('.navigation__icon').click();
    cy.get('.navigation__link').should('contain', 'Booking');
    cy.contains('.navigation__link', 'Booking').click();
  })
})