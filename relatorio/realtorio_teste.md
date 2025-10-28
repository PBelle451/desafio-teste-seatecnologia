# Relatório de Testes – Desafio Técnico SEA Tecnologia

**Candidato:** Pedro Belle Magalhães de Castro
**Função:** Analista de Teste  
**Data de entrega:** 27/10/2025  
**Prazo:** 7 dias  
**Aplicação:** [http://analista-teste.seatecnologia.com.br/](http://analista-teste.seatecnologia.com.br/)  
**Protótipo:** [https://tinyurl.com/yl58hs4m](https://tinyurl.com/yl58hs4m)

---

## 1. Objetivo
O objetivo deste relatório é apresentar os testes realizados sobre a aplicação web fornecida pela SEA Tecnologia, avaliando sua conformidade com o protótipo e as funcionalidades descritas no desafio técnico.  
Foram analisados aspectos de **design (UI)**, **funcionalidade**, **persistência de dados**, **navegação** e **compatibilidade**.

---

## 2. Metodologia
Os testes foram realizados de forma **manual e automatizada**, conforme a seguinte abordagem:

### Testes manuais
- Execução dos fluxos principais do sistema.
- Comparação visual com o protótipo.
- Verificação de campos obrigatórios e mensagens de validação.
- Inspeção via DevTools (Network, Application e Console).

### Testes automatizados (Cypress)
- Scripts criados em `/automacao/e2e/`
  - `formulario.cy.js` → validação de CPF e data.
  - `persistencia.cy.js` → persistência de dados após reload.
  - `navegacao.cy.js` → verificação de links e páginas “Em breve”.

### Ferramentas utilizadas
- **Cypress** (automação de testes e2e)  
- **Firefox Developer Tools**  
- **ColorZilla** e **WhatFont** (comparação de design)  
- **Excel** (planejamento e rastreabilidade de testes)

---

## 3. Escopo de Teste
| Categoria | Descrição |
|------------|------------|
| **Design / UI** | Comparação de fonte, cores e elementos com o protótipo. |
| **Funcionalidade** | Formulário, CPF, data, EPI, edição e exclusão de funcionários. |
| **Persistência** | Armazenamento local e exibição após reload. |
| **Navegação** | Teste de links e menus (todas as rotas “Em breve”). |
| **Compatibilidade** | Chrome, Firefox e Edge. |

---

## 4. Principais Achados
- **BUG-01:** Validação de CPF e RG inexistentes ou duplicados (campo aceita valores inválidos e CPF e RG duplicado).  
- **BUG-02:** Data de nascimento inválida e inexistente (sistema aceita cadastro de Data de Nascimento de datas futuras ou inferiores a 18 anos).
- **BUG-03:** Botão de adicionar EPI associado ao funcionário não funciona (Ao clicar em adicionar EPI, botão simplesmente não funciona).
- **BUG-04:** Tela de anexo de relatório médico não é ocultada (ao clicar em 'O trabalhador não usa EPI', a tela de anexo de relatório médico que deveria ser ocultada não é ocultada)
- **BUG-05:** Botão de adicionar uma outra atividade não funciona (botão deveria abrir um novo formulário para adicionar uma nova atividade ao usuário porém só sai do formulário).
- **BUG-06:** Os botões de redirecionar para outra tela não funcionam (Ao clicar nos botões para redirecionar para outra tela escrito "em breve", os botões simplesmente não funcionam)
- Pequena diferença de layout (As cores do protótipo divergem levemente da aplicação).  
- Persistência e exclusão de dados funcionam corretamente.  
- Compatível com vários navegadores em desktop porém com baixa responsividade mobile.
- As fontes do protótipo e da aplicação são correspondentes
- O número de ícones na coluna lateral e na barra de cima são correspondentes
- Os campos obrigatórios de cadastro (nome, data de nascimento, CPF, RG, Sexo) respondem corretamente.
- O anexo de relatório médico é responsivo
- Aplicação permite o cadastro de funcionários ativos ou inativos corretamente.
- Aplicação permite o cadastro de funcionário sem EPI corretamente.
- O campo de RG deve ser limitado a apenas 7 dígitos porém o sitema permite cadastro de mais dígitos.
- O campo de CPF é limitado a 11 dígitos.
- Os filtros de ver funcionários ativos e inativos respondem corretamente.
---

## 5. Recomendações
1. Implementar validação de CPF e RG no front-end e backend.  
2. Uniformizar cores e espaçamento conforme protótipo.  
3. Criar um método de validação de data de nascimento no front-end e no back-end.
4. Garantir responsividade mobile.  
5. Automatizar fluxo completo de CRUD via Cypress CI. 
6. Corrigir a responsividade do botão de adicionar EPI
7. Ocultar tela de anexo a relatório médico ao selecionar que funcionário não usa EPI
8. Corrigir a responsividade do botão de adicionar uma outra atividade no front-end e no back-end.
9. Verificar o redirecionamento dos botões das outras etapas e menus corretamente tanto no front-end quanto no back-end.

---

## 6. Evidências
Todos os prints de tela estão disponíveis em:  
 [`cypress/screenshots`](/cypress/screenshots/)

---

## 7. Conclusão
A aplicação apresenta **comportamento funcional satisfatório** e **aderência geral ao protótipo**, com exceção de pequenos desvios visuais e ausência de validações necessárias que devem ser corrigidas para que o sistema funcione corretamente e evite inconsistências e problemas.  
De forma geral, o sistema está em **nível adequado de qualidade para ambiente de homologação**, porém com muitas correções pontuais recomendadas e necessárias antes da produção pois muitos bugs reportados acima podem ser comprometedores para a segurança do funcionário cadastrado e também da empresa.

---

**Assinado:**  
**Pedro Belle Magalhães de Castro** – Analista de Testes  
SEA Tecnologia – Desafio Técnico 2025
