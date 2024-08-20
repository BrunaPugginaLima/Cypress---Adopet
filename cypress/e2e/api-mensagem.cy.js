describe('Api Adopet', () => {
    
    //const tempoEsperado = Math.random()* 1000 //* tempo de espera 1000 -> equivalente a 1s
    //const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYzA4N2FlYi03MDg1LTRkOGEtYTI2Zi1lNDYxNDQxMzk2MGQiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcyMzQ3OTExMCwiZXhwIjoxNzIzNzM4MzEwfQ.DQYCQGTlCHRYO9DpzSYVueB-jR1LcC5N8_Fs-UIaa1g`
            
    it('Mensagem da API', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/ac087aeb-7085-4d8a-a26f-e4614413960d',
            headers: Cypress.env()
           }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            //expect(res.duration).to.be.lte(tempoEsperado) //(Lte = menor que) . Quando tempo é maior que o esperado ele não passa 
            
        })
    })
        
})

/* Flaky Test : As vezes passa e as vezes não passa.

 linhas que tornavam esse codigo um Flaky Test comentadas 

 https://docs.cypress.io/guides/guides/test-retries documentação de como fazer ele passar por varias vezes para ver quantas vezes passou/falhou 

 Flaky tests não devem estar na suíte de testes.

*/