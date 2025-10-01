/// <reference types="cypress" />
/* eslint-env cypress/globals */

import data from '../fixtures/orphanages.json'
import CreatePage from '../support/pages/create'
import mapPage from '../support/pages/map'

describe('Cadastro de orfanatos', () => {
    it('deve cadastrar um novo orfanato', () => {
        const orphanage = data.create
        cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })

        CreatePage.go()
        cy.setMapPosition(orphanage.position)
        CreatePage.form(orphanage)
        CreatePage.submit()

        mapPage.popup.haveText('Orfanato cadastrado com sucesso.')
    })

    it('não deve cadastrar orfanato duplicado', () => {
        const orphanage = data.duplicate
        cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })
        cy.postOrphanage(orphanage)

        CreatePage.go()
        cy.setMapPosition(orphanage.position)
        CreatePage.form(orphanage)
        CreatePage.submit()

        mapPage.popup.haveText(`Já existe um cadastro com o nome: ${orphanage.name}`)            
    })
})