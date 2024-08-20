describe('Login pelo icone de mensagem', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__message').click();
    })
    it('Login correto', () => {
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
     
    });
 
});