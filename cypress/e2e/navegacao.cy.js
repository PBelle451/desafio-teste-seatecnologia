// ***********************************************************
// Testes de Navegação - Desafio SEA Tecnologia
// -----------------------------------------------------------
// Objetivo: verificar se todos os links e itens de menu levam
// corretamente às seções "Em breve" ou às páginas esperadas.
// ***********************************************************

describe('Navegação entre páginas', () => {
    beforeEach(() => {
        cy.visit('https://analista-teste.seatecnologia.com.br/');
    });

    it('Deve carregar o menu principal', () => {
        cy.contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus eu vulputate tempus.').should('exist');
        cy.log('Menu principal carregado com sucesso.');
    });

    it('Todos os links do menu devem levar à seção "Em breve"', () => {
        cy.get('a').each(($link) => {
            const href = $link.attr('href');
            if (href && !href.startsWith('#')) {
                cy.visit(href);
                cy.contains('Em breve', { matchCase: false }).should('exist');
                cy.log(`Link ${href} redireciona corretamente.`);
            }
        });
    });

    it('Links inexistentes não devem retornar o erro 404', () => {
        cy.get('a').each(($link) => {
            const href = $link.attr('href');
            if (href && !href.startsWith('#')) {
                cy.request({
                    url: href,
                    failOnStatusCode: false,
                }).then((response) => {
                    expect(response.status).to.not.equal(404);
                    cy.log(`Link ${href} não retornou 404.`);
                });
            }
        });
    });
});