describe('Api Adopet', () => {
        let authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYzA4N2FlYi03MDg1LTRkOGEtYTI2Zi1lNDYxNDQxMzk2MGQiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcyMzQ3OTExMCwiZXhwIjoxNzIzNzM4MzEwfQ.DQYCQGTlCHRYO9DpzSYVueB-jR1LcC5N8_Fs-UIaa1g`
                
        it('Mensagem da API', () => {
            cy.request({
                method: 'GET' ,
                url: 'https://adopet-api-i8qu.onrender.com/mensagem/ac087aeb-7085-4d8a-a26f-e4614413960d',
                headers: { authorization }
               }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('msg')
                expect(res.body).to.have.property('mensagem')
                //console.log(res.body);
                cy.writeFile('cypress/fixtures/apiResponse.json', res.body); // Grava a resposta em um arquivo JSON
               
                 // Verifique se ao menos um item na lista msg tem a propriedade name e se o name é TAHSASUI
                res.body.msg.forEach(item => {
                expect(item).to.have.property('name')
                expect(item.name).to.be.equal('TAHSASUI')
                })
            })
            })
            
})
