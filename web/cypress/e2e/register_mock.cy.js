// <reference types="cypress" />

import data from '../fixtures/orphanages.json'

describe('Cadastro de orfanatos', () => {
    it('deve cadastrar um novo orfanato', () => {

        const orphanage = data.create


        //cy.visit('http://localhost:3000/orphanages/create')

        const url = "http://localhost:3000/orphanages/create"
        cy.visitWithMockGeolocation(url, -23.5991862,-46.6933703)

        cy.get('legend')
            .should('be.visible')
            .and('have.text', 'Cadastro')

        //cy.get('input[name=name]').type('Orfanato criança feliz')

        // //label[text()="Nome"]/..//input
        cy.contains('label', 'Nome')
            .parent()
            .find('input')
            .type(orphanage.name)

        cy.get('#description')
            .type(orphanage.description)

        cy.get('input[type=file]')
            .selectFile('cypress/fixtures/images/kids-playground-1.png', { force: true }) // force: true pois o campo está com display none

        cy.get('#opening_hours')
            .type(orphanage.opening_hours)

        cy.contains('button', orphanage.open_on_weekends).click()

        cy.get('.save-button').click()
    })
})

Cypress.Commands.add('visitWithMockGeolocation', (url, latitude = 54, longitude = 39) => {
    const mockGeolocation = (win, latitude, longitude) => {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition', cb => {
            return cb({ coords: { latitude, longitude } })
        })
    }
    cy.visit(url, {
        onBeforeLoad: win => {
            mockGeolocation(win, latitude, longitude)
        }
    })
})