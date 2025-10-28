// ***********************************************************
// Testes de Formulário - Desafio SEA Tecnologia
// -----------------------------------------------------------
// Objetivo: verificar se todos os campos do formulário funcionam
// corretamente e exibem mensagens de erro apropriadas.
// caso de sucesso ou falha no cadastro de funcionários.
// ***********************************************************

describe('Formulario', () => {
    const url = 'https://analista-teste.seatecnologia.com.br/';

    const funcionario = {
        name: 'Ana Silva',
        cpf: '123.456.789-09', 
        birthDay: '1990-05-15',
        rg: '1234567',
        caNumber: '9876',
        sexo: 'Feminino'

    }

    it('Deve cadastrar funcionário ativo', () => {
        cy.visit(url);
        cy.contains('+ Adicionar Funcionário').click();
        cy.get('button[type="button"]').click();
        cy.get('input[name="name"]').type('' + funcionario.name );
        cy.contains('' + funcionario.sexo).click();
        cy.get('input[name="cpf"]').type('' + funcionario.cpf );
        cy.get('input[name="birthDay"]').type('' + funcionario.birthDay );
        cy.get('input[name="rg"]').type('' + funcionario.rg );
        cy.get('input[name="caNumber"').type('' + funcionario.caNumber );
        cy.get('button[type="submit"]').click();
        if(cy.contains('Ativos').should('be.visible')){
            cy.contains(funcionario.name).should('exist');
        }
    });

    it('Deve cadastrar funcionário inativo', () => {
        cy.visit(url);
        cy.contains('+ Adicionar Funcionário').click();
        cy.get('input[name="name"]').type('' + funcionario.name );
        cy.contains('' + funcionario.sexo).click();
        cy.get('input[name="cpf"]').type('' + funcionario.cpf );
        cy.get('input[name="birthDay"]').type('' + funcionario.birthDay );
        cy.get('input[name="rg"]').type('' + funcionario.rg );
        cy.get('input[name="caNumber"').type('' + funcionario.caNumber );
        cy.get('button[type="submit"]').click();
        if(cy.contains('Ativos').should('be.visible')){
            cy.contains(funcionario.name).should('exist');
        }
    });

    it('Deve cadastrar funcionário com CPF inválido', () => {
        cy.visit(url);
        cy.contains('+ Adicionar Funcionário').click();
        cy.get('button[type="button"]').click();
        cy.get('input[name="name"]').type('João Pereira');
        cy.contains('Masculino').click();
        cy.get('input[name="cpf"]').type('' + funcionario.cpf);
        cy.get('input[name="birthDay"]').type('1985-10-20');
        cy.get('input[name="rg"]').type('9834567');
        cy.get('input[name="caNumber"]').type('1234');
        cy.get('button[type="submit"]').click();
        cy.contains('CPF inválido').should('be.visible');
    });

    it('Deve cadastrar funcionário menor de idade', () => {
        cy.visit(url);
        cy.contains('+ Adicionar Funcionário').click();
        cy.get('button[type="button"]').click();
        cy.get('input[name="name"]').type('Maria Oliveira');
        cy.contains('Feminino').click();
        cy.get('input[name="cpf"]').type('987.654.321-00');
        cy.get('input[name="birthDay"]').type('2010-08-25');
        cy.get('input[name="rg"]').type('7654321');
        cy.get('input[name="caNumber"]').type('6543');
        cy.get('button[type="submit"]').click();
        cy.contains('Funcionário deve ser maior de idade').should('be.visible');
    });

    it("Deve cadastrar funcionário sem preencher campos obrigatórios", () => {
        cy.visit(url);
        cy.contains('+ Adicionar Funcionário').click();
        cy.get('button[type="button"]').click();
        cy.get('button[type="submit"]').click();
        cy.contains('Nome é obrigatório').should('be.visible');
        cy.contains('CPF é obrigatório').should('be.visible');
        cy.contains('Data de Nascimento é obrigatória').should('be.visible');
        cy.contains('RG é obrigatório').should('be.visible');
        cy.contains('CA Number é obrigatório').should('be.visible');
    });

    it("Deve inserir mais de um EPI para um funcionário", () => {
        cy.visit(url);
        cy.contains('+ Adicionar Funcionário').click();
        cy.get('button[type="button"]').click();
        cy.get('input[name="name"]').type('Lucas Fernandes');
        cy.contains('Masculino').click();
        cy.get('input[name="cpf"]').type('456.789.123-00');
        cy.get('input[name="birthDay"]').type('1992-11-30');
        cy.get('input[name="rg"]').type('3345678');
        cy.get('input[name="caNumber"]').type('7890');
        cy.get('button[type="addEPI"]').click();
        cy.contains("Adicionar outra atividade").click();
        cy.contains("Selecione o EPI").click();
        cy.contains("Luvas Descartáveis").click();
        cy.get('input[name="caNumber"]').type('7192');
        //cy.get('button[type="addEPI"]').click();
        cy.get('button[type="submit"]').click();
        cy.contains("Ver apenas ativos").click();
        cy.contains('Ativos').should('be.visible');
        cy.contains('Lucas Fernandes').should('exist');
    });

    it("Adicionar um funcionário sem EPI", () => {
        cy.visit(url);
        cy.contains('+ Adicionar Funcionário').click();
        cy.get('button[type="button"]').click();
        cy.get('input[name="name"]').type('Mariana Costa');
        cy.contains('Feminino').click();
        cy.get('input[name="cpf"]').type('654.321.987-00');
        cy.get('input[name="birthDay"]').type('1995-07-18');
        cy.get('input[name="rg"]').type('4456789');
        cy.get('input[name="caNumber"]').type('8901');
        cy.contains("O trabalhador não usa EPI").click();
        cy.get('button[type="submit"]').click();
        cy.contains("Ver apenas ativos").click();
        if(cy.contains('Ativos').should('be.visible')){
            cy.contains("Mariana Costa").should('exist');
        }
    });

    it("Tela de anexo de relatórios médicos deve ser ocultada ao adicionar um funcionário sem EPI", () => {
        cy.visit(url);
        cy.contains('+ Adicionar Funcionário').click();
        cy.get('button[type="button"]').click();
        cy.get('input[name="name"]').type('Felipe Almeida');
        cy.contains('Masculino').click();
        cy.get('input[name="cpf"]').type('789.123.456-00');
        cy.get('input[name="birthDay"]').type('1987-09-22');
        cy.get('input[name="rg"]').type('5567890');
        cy.get('input[name="caNumber"]').type('9012');
        cy.contains("O trabalhador não usa EPI").click();
        cy.contains("Adicione Atestado de Saúde Ocupacional (opcional):").should('not.exist');
    });

    it("Tela de cadastro de EPI não permite adicionar outra atividade" , () => {
        cy.visit(url);
        cy.contains('+ Adicionar Funcionário').click();
        cy.get('button[type="button"]').click();
        cy.get('input[name="name"]').type('Beatriz Nunes');
        cy.contains('Feminino').click();
        cy.get('input[name="cpf"]').type('321.987.654-00');
        cy.get('input[name="birthDay"]').type('1993-12-05');
        cy.get('input[name="rg"]').type('6678901');
        cy.get('input[name="caNumber"]').type('0123');
        cy.contains("Adicionar outra atividade").click();
        cy.contains("Adicionar outra atividade").should('exist');
    });
});