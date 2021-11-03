describe ('Teste de APIs', () => {
    it ('TesteAPIs1', () => {
        cy.visit ('https://google.com.br/')
        cy.get ('.gLFyf') .type ('Magazine Luiza{enter}')
        cy.contains ('magazine')
    })

    it ('Teste de API1', () => {
        cy.request ({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/1',
            body: {
                'url': 'TESTE AUTO API',
                'icon': 'ac_unit'
            },
            headers: {
                accept: 'application/json',
            },
            timeout: 60000          
        }).then (xhr => {
            expect (xhr.status) .to.equal (200)
        })
              
    })
 })