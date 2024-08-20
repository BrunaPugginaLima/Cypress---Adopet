describe('Testes na Página principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('verifica título da página', () => {
        cy.title().should('eq', 'AdoPet');
     
    });
 
});