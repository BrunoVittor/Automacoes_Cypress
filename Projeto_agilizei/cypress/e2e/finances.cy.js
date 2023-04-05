

describe('Transações', () => {

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    });

    it('Cadastrar uma entrada', () => {
        criarTransacao('Freela', 2500, '2023-03-05')
        cy.get('tbody tr td.description').should('have.text', 'Freela')

    });

    it('Cadastrar uma saída', () => {
        criarTransacao('Pneus', -1500, '2023-03-11')
        cy.get('tbody tr td.description').should('have.text', 'Pneus')

    });

    it('Excluir entrada', () => {
        criarTransacao('Aumento', 2000, '2023-03-14')
        criarTransacao('Venda', 1000, '2023-03-15')
        cy.contains('.description', 'Venda')
            .siblings()
            .children('img')
            .click()
    });
});

function criarTransacao(descricao, valor, data, validacao) {
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type(data) // yyyy-mm-dd
    cy.contains('button', 'Salvar').click()
}