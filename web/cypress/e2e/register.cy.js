// <reference types="cypress" />

describe('Cadastro de orfanatos', () => {
    it('deve cadastrar um novo orfanato', () => {
        cy.visit('http://localhost:3000/orphanages/create')

        cy.get('legend')
            .should('be.visible')
            .and('have.text', 'Cadastro')
    })
})