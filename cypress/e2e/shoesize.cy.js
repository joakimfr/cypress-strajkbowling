describe('shoe sizes spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/') 
  })

  it('should exist a section for shoe sizes', () => {
    cy.get('.shoes').should('exist');
    
  });

  it('should be able to enter shoe size for each player and be able to remove', () => {
    cy.get('.shoes__button').click();
    cy.get('.shoes__form').should('have.length', 1); 
    cy.get('.shoes__input').eq(0).type('42'); 
    
    cy.get('.shoes__button--small').eq(0).click(); 
    
    cy.get('.shoes__form').should('have.length', 0); 
    
   
  });


})