describe('Bokningssida', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/') 
  })

  it('ska finnas en sektion för skostorlek', () => {
    cy.get('.shoes').should('exist');
    
  });

  it('ska kunna ange skostorlek för varje spelare och kunna ta bort', () => {
    cy.get('.shoes__button').click();
    cy.get('.shoes__form').should('have.length', 1); 
    cy.get('.shoes__input').eq(0).type('42'); 
    
    cy.get('.shoes__button--small').eq(0).click(); 
    
    cy.get('.shoes__form').should('have.length', 0); 
    
   
  });


})