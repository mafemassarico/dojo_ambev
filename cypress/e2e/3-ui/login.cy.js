/// <reference types="cypress" />

//const { describe } = require("mocha");

/* 
Funcionalidade: Tela de login 
Eu como usuario do coenxão QA
Quero fazer meu cadastro 
Para me conectar com outros QAs

Cenário: Login com sucesso
Arrage (Pré-condição) Dado que eu esteja na pagina de login
Act (Ação) Quando eu inserir os dados válidos
Assert (Resultado esperado) Então deve me direcionar para o dashboard
*/

// import usuario from "../../fixtures/usuario.json"


describe('Tela de login', () => {

    beforeEach(() => {
        cy.visit('login')
    });
    afterEach(() => {
        cy.screenshot()
    });
    it.only('Login com sucesso', () => {
        // cy.login(usuario(email),usuario(senha))
        cy.fixture("usuario").then((user)=> {
            cy.login(user.email,user.senha)
            cy.contains('Bem-vindo').should('be.visible')
        })
    });
    it('Login invalido', () => {
        
        cy.get('[data-test="alert"]').should('contain','Credenciais inválidas')

    })
});
