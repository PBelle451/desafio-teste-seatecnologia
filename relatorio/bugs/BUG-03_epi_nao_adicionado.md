# BUG-03 – Não é possível adicionar mais de um EPI no cadastro do funcionário

**Categoria:** Funcional  
**Severidade:** Média 
**Prioridade:** Média 
**Status:** Aberto  
**Ambiente:**  
- Navegador: Mozilla Firefox
- Sistema: Windows 11
- URL: http://analista-teste.seatecnologia.com.br/

## Descrição
Ao tentar cadastrar um funcionário com mais de um EPI, o botão `Adicionar EPI` **não funciona** 
Esse comportamento pode causar muitos problmas já que o sistema não é capaz de registrar mais de uma atividade exercidada pelo funcionário como deveria.

## Passos para Reproduzir
1. Acessar a aplicação: [http://analista-teste.seatecnologia.com.br/](http://analista-teste.seatecnologia.com.br/)  
2. Clicar em **Adicionar Novo Funcionário**
3. 3. Preencher o campo **CPF**  
4. Preencher o campo **Nome**  
5. Prencher o campo **RG**
6. Preencher o campo **Data de Nascimento**
7. Preencher o campo **EPI**
8. Clicar em **Adicionar EPI**

## Resultado Esperado
Sistema deveria exibir outro formulário para incluir outro EPI.

## Resultado Obtido
**Nada** acontece ao clicar no botão

## Evidência
![BUG-03 - Botão de adicionar EPI não funciona](/cypress/screenshots/formulario.cy.js/Formulario%20--%20Deve%20inserir%20mais%20de%20um%20EPI%20para%20um%20funcionário%20(failed)%20(attempt%202).png)

## Sugestão de Correção
1. Verificar o comportamento do botão no Back-End antes de implementar
2. Verificar o Front-End antes de implementar
3. Criar mais uma tarefa no Cypress para verificar

**Responsável pelo teste:** Pedro Belle Magalhães de Castro 
**Data de registro:** 27/10/2025  
**Revisão:** v1.0