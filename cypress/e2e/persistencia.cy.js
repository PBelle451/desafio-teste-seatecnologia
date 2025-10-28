// ***********************************************************
// Testes de Persistência - Desafio SEA Tecnologia
// -----------------------------------------------------------
// Objetivo: verificar se os dados inseridos no formulário de
// funcionário permanecem após recarregar a página.
// ***********************************************************

describe('Persistência de Dados no Formulário', () => {
    const funcionario = {
        cpf: '123.456.789-09',
        nome: 'Carlos Roberto Pinheiro',
        nascimento: '1955-03-22',
        rg: '1234567',
        ca: '5556',
        sexo: 'Masculino'
    }

    beforeEach(() => {
        cy.visit('https://analista-teste.seatecnologia.com.br/');
    });

    it("Deve preencher e salvar novo funcionário, recarregar e verificar dados", () => {
        cy.contains('+ Adicionar Funcionário').click();
        cy.get('button[type="button"]').click();
        cy.get('input[name="name"]').type(funcionario.nome);
        cy.contains(funcionario.sexo).click();
        cy.get('input[name="cpf"]').type(funcionario.cpf);
        cy.get('input[name="birthDay"]').type(funcionario.nascimento);
        cy.get('input[name="rg"]').type(funcionario.rg);
        cy.get('input[name="caNumber"]').type(funcionario.ca);
        cy.get('button[type="submit"]').click();1
        cy.reload();
        cy.contains(funcionario.nome, { matchCase: false }).should('exist');
        cy.log("Funcionário salvo com sucesso e dados persistem após recarregar a página.");
    });
});