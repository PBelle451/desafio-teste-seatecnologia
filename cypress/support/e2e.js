// ***********************************************************
// Arquivo de suporte - cypress/support/e2e.js
// -----------------------------------------------------------
// Este arquivo é processado automaticamente antes dos testes.
// Use-o para configurar comandos globais, hooks e comportamentos
// que se aplicam a todos os testes de e2e.
// ***********************************************************

// Importa comandos customizados
// import './commands';

// Suprime exceções não tratadas da aplicação sob teste
// para evitar que erros de JS que não afetam o fluxo quebrem os testes.
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorne false para impedir que o Cypress falhe o teste
  console.warn('Exceção capturada e ignorada:', err.message);
  return false;
});

// Hook global para logar início/fim de cada teste
beforeEach(() => {
  cy.log('Iniciando novo caso de teste...');
});

afterEach(function () {
  if (this.currentTest.state === 'failed') {
    cy.log(`Teste falhou: ${this.currentTest.title}`);
  } else {
    cy.log(`Teste passou: ${this.currentTest.title}`);
  }
});

// Configura comportamento padrão para capturas automáticas
Cypress.Screenshot.defaults({
  capture: 'runner', // captura toda a tela de execução
  overwrite: true,
  disableTimersAndAnimations: true,
});

// Exemplo: comando global de delay para simular digitação humana
Cypress.Commands.add('slowType', (selector, text) => {
  cy.get(selector).type(text, { delay: 80 });
});

// Exemplo: comando global para validar mensagem de erro visível
Cypress.Commands.add('checkErrorMessage', (message) => {
  cy.contains(message).should('be.visible');
});
