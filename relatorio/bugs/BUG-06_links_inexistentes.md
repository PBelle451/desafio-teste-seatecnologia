# BUG-06 – Links deveriam levar à seção "Em Breve"

**Categoria:** Navegação
**Severidade:** Média 
**Prioridade:** Média 
**Status:** Aberto  
**Ambiente:**  
- Navegador: Mozilla Firefox
- Sistema: Windows 11
- URL: http://analista-teste.seatecnologia.com.br/

## Descrição
Ao tentar clicar em um ícone de umas página que ainda não estão prontas, deveria ser redirecionado para uma página escrita "em breve". 
Porém ao realizar o teste, nada acontece pois os botões não funcionam.
Isso causa certo problema no site pois parece que o site não é funcional.

## Passos para Reproduzir
1. Acessar a aplicação: [http://analista-teste.seatecnologia.com.br/](http://analista-teste.seatecnologia.com.br/)  
2. Clicar em **A Etapa está concluída**
3. Clicar em **Próximo Passo**

## Resultado Esperado
Sistema deveria redirecionar para um outro link com uma tela escrito `Em Breve`

## Resultado Obtido
Ao clicar nos botões, **NADA ACONTECE**

## Evidência
![BUG-06 - Links deveriam levar à seção "Em Breve"](/cypress/screenshots/navegacao.cy.js/Navegação%20entre%20páginas%20--%20Todos%20os%20links%20do%20menu%20devem%20levar%20à%20seção%20Em%20breve%20(failed)%20(attempt%202).png)

## Sugestão de Correção
1. Verificar o comportamento do botão no Back-End antes de implementar
2. Verificar se as telas do Front-End já estão corretamente implementadas
3. Verificar se a hiperligação está correta
4. Criar mais uma tarefa no Cypress para verificar ao ser corrigido

**Responsável pelo teste:** Pedro Belle Magalhães de Castro 
**Data de registro:** 27/10/2025  
**Revisão:** v1.0