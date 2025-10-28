# BUG-01 – Validação de CPF e RG inválidos não exibe mensagem de erro

**Categoria:** Funcional  
**Severidade:** Alta  
**Prioridade:** Alta  
**Status:** Aberto  
**Ambiente:**  
- Navegador: Mozilla Firefox
- Sistema: Windows 11
- URL: http://analista-teste.seatecnologia.com.br/

---

## Descrição
Ao tentar cadastrar um funcionário com CPF e RG inválido, o sistema permite o envio do formulário **sem exibir qualquer mensagem de erro** ao usuário. 
CPF inválido ou duplicado ou RG inválido ou duplicado é salvo sem problema nenhum
Esse comportamento pode gerar registros incorretos e comprometer a integridade dos dados.

---

## Passos para Reproduzir
1. Acessar a aplicação: [http://analista-teste.seatecnologia.com.br/](http://analista-teste.seatecnologia.com.br/)  
2. Clicar em **Adicionar Novo Funcionário**
3. Preencher o campo **CPF** com `123.456.789-00`  
4. Preencher o campo **Nome**  
5. Prencher o campo **RG** com `1234567`
6. Preencher o campo **Data de Nascimento**
7. Preencher o campo **EPI**
8. Clicar em **Salvar**
9. Clicar em **Adicionar Novo Funcionário**
10. Preencher o campo **CPF** com `123.456.789-00`
11. Preencher o campo **Nome**  
12. Prencher o campo **RG** com `1234567`
13. Preencher o campo **Data de Nascimento**
14. Preencher o campo **EPI**
15. Clicar em **Salvar**
---

## Resultado Esperado
O sistema deve validar o CPF e **exibir mensagem de erro**:  
> “CPF inválido. Por favor, insira um número válido.”

---

## Resultado Obtido
O sistema **aceita o CPF e o RG inválidos** e registra o funcionário normalmente, sem qualquer alerta visual.

---

## Evidência
![BUG-01 - Validação CPF e RG inválidos](/cypress/screenshots/formulario.cy.js/Formulario%20--%20Deve%20cadastrar%20funcionário%20com%20CPF%20inválido%20(failed)%20(attempt%202).png)

---

## Sugestão de Correção
1. Implementar função de validação de CPF e RG no front-end antes do envio.  
2. Exibir mensagem de erro amigável abaixo do campo.  
3. Validar novamente no backend para garantir consistência.  
4. Adicionar teste automatizado em Cypress cobrindo esse caso.

---

**Responsável pelo teste:** Pedro Belle Magalhães de Castro 
**Data de registro:** 27/10/2025  
**Revisão:** v1.0
