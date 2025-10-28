# BUG-02 – Validação de Data de Nascimento inválida não exibe mensagem de erro

**Categoria:** Funcional  
**Severidade:** Alta  
**Prioridade:** Alta  
**Status:** Aberto  
**Ambiente:**  
- Navegador: Mozilla Firefox
- Sistema: Windows 11
- URL: http://analista-teste.seatecnologia.com.br/

## Descrição
Ao tentar cadastrar um funcionário com uma data de nascimento menor que 18 anos ou data futura, o sistema permite o envio do formulário **sem exibir qualquer mensagem de erro** ao usuário. 
Esse comportamento pode gerar registros incorretos e muitas inconsistências entre dados.

## Passos para Reproduzir
1. Acessar a aplicação: [http://analista-teste.seatecnologia.com.br/](http://analista-teste.seatecnologia.com.br/)  
2. Clicar em **Adicionar Novo Funcionário**
3. 3. Preencher o campo **CPF**  
4. Preencher o campo **Nome**  
5. Prencher o campo **RG**
6. Preencher o campo **Data de Nascimento** com `2026-01-01`
7. Preencher o campo **EPI**
8. Clicar em **Salvar**

## Resultado Esperado
O sistema deve validar a data de nascimento e **exibir mensagem de erro**:  
> “Data de nascimento inválida. Insira uma data válida”

## Resultado Obtido
O sistema **aceita a data inválida** e registra o funcionário normalmente, sem qualquer alerta visual.

## Evidência
![BUG-02 - Data de nascimento inválida](/cypress/screenshots/formulario.cy.js/Formulario%20--%20Deve%20cadastrar%20funcionário%20menor%20de%20idade%20(failed)%20(attempt%202).png)

## Sugestão de Correção
1. Implementar função de validação de data de nascimento no Front-End antes de implementar
2. Exibir mensagem de erro amigável abaixo do campo.
3. Validar novamente no Back-End para garantir consistência.
4. Adicionar um teste automatizado no Cypress cobrindo esse caso.

**Responsável pelo teste:** Pedro Belle Magalhães de Castro 
**Data de registro:** 27/10/2025  
**Revisão:** v1.0