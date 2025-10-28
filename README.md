# Desafio Técnico – Analista de Teste (SEA Tecnologia)

Repositório contendo o plano de testes, relatório e evidências referentes ao desafio técnico proposto pela **SEA Tecnologia**.

---

## Objetivo
Avaliar a aplicação web disponível em [http://analista-teste.seatecnologia.com.br](http://analista-teste.seatecnologia.com.br), verificando sua conformidade com o protótipo:  
[https://tinyurl.com/yl58hs4m](https://tinyurl.com/yl58hs4m)

O foco foi analisar:
- Interface e aderência ao protótipo (UI/UX);
- Funcionalidades principais (formulário, CPF, data, EPI, edição e exclusão);
- Persistência e recuperação de dados;
- Navegação e links (“Em breve”);
- Compatibilidade entre navegadores;
- Bugs que poderiam comprometer a segurança

---

## Testes Automatizados (Cypress)

Scripts automatizados localizados em `/cypress/e2e/`.

### Como executar:

```bash
# Instalar dependências
npm install

# Executar em modo interativo
npx cypress open

# Executar em modo headless
npx cypress run

