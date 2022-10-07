/// <reference types="cypress" />
const faker = require('faker-br');

describe('Tela de cadastro', () => {
    
    beforeEach(() => {
        cy.visit('cadastrar')
    });

it('cadastro com sucesso', () => {
    let nome = faker.name.findname()
    let email  = faker.internet.email(nome)
    
    
    cy.contains('Bem-vindo').should('be.visible')
});
});