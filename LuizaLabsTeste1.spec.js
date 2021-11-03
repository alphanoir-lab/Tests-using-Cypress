describe('Teste Funcional', () => {
    it ('Teste_LuizaLabs1', () => {
            cy.visit ('https://www.google.com.br')
            cy.get('.gLFyf') .type ('Magazine Luiza{enter}')
            cy.contains('Magazine')
    })
})

