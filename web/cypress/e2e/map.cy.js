/// <reference types="cypress" />
/* eslint-env cypress/globals */

import data from '../fixtures/orphanages.json'

describe('Mapa', () => {
    it('deve poder escolher um orfanato no mapa', () => {
        const orphanage = data.map
        cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })
        cy.postOrphanage(orphanage)

        cy.goTo('/map')
        cy.get('.leaflet-marker-icon').as('mapList')
        cy.get('@mapList').each((elemento, index, lista) => {
            cy.get('@mapList')
                .eq(index)
                .click({force: true})
            cy.wait(1000)

            cy.get('.leaflet-popup-content').as('divName')

            cy.get('@divName')
                .invoke('text')
                .then((txt) => {
                    if (txt === orphanage.name) {
                        cy.get('@mapList').eq(index).as('foundItem')
                    }
                })
        })

        cy.get('@foundItem')
            .click({force: true})

        cy.contains('.leaflet-popup-content', orphanage.name)
            .find('a')
            .click({force: true})

        cy.contains('h1', orphanage.name)
            .should('be.visible')

        const googleUrl = `https://www.google.com/maps/dir/?api=1&destination=${orphanage.position.latitude},${orphanage.position.longitude}`
        cy.contains('a', 'Ver rotas no Google Maps')
            .should('have.attr', 'href', googleUrl)
    })
})