# BUG-04 – Ao cadastrar funcionário sem EPI, tela de anexo de relatório médico não é ocultada

**Categoria:** Funcional  
**Severidade:** Baixa
**Prioridade:** Média 
**Status:** Aberto  
**Ambiente:**  
- Navegador: Mozilla Firefox
- Sistema: Windows 11
- URL: http://analista-teste.seatecnologia.com.br/

## Descrição
Ao tentar cadastrar um funcionário sem um EPI clicando no botão de `O trabalhador não usa EPI` , tela de anexo de relatórios médicos não é ocultada como deveria.

## Passos para Reproduzir
1. Acessar a aplicação: [http://analista-teste.seatecnologia.com.br/](http://analista-teste.seatecnologia.com.br/)  
2. Clicar em **Adicionar Novo Funcionário**
3. 3. Preencher o campo **CPF**  
4. Preencher o campo **Nome**  
5. Prencher o campo **RG**
6. Preencher o campo **Data de Nascimento**
7. Clicar em **O trabalhador não usa EPI**

## Resultado Esperado
Sistema deveria exibir ocultar a tela de anexar relatório médico.

## Resultado Obtido
A tela de anexo **não é ocultada**

## Evidência
![BUG-04 – Ao cadastrar funcionário sem EPI, tela de anexo de relatório médico não é ocultada](/cypress/screenshots/formulario.cy.js/Formulario%20--%20Tela%20de%20anexo%20de%20relatórios%20médicos%20deve%20ser%20ocultada%20ao%20adicionar%20um%20funcionário%20sem%20EPI%20(failed)%20(attempt%202).png)

## Sugestão de Correção
1. Verificar o comportamento do botão no Back-End antes de implementar
2. Verificar o Front-End antes de implementar
3. Criar mais uma tarefa no Cypress para verificar

**Responsável pelo teste:** Pedro Belle Magalhães de Castro 
**Data de registro:** 27/10/2025  
**Revisão:** v1.0