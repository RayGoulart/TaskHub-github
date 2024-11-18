describe('Página de Login', () => {
    it('Realiza login com sucesso', () => {
        cy.visit('http://localhost:8000');

        // Espera o campo de e-mail ser visível
        cy.get('#email').should('be.visible').type('teste@exemplo.com');
        cy.get('#password').should('be.visible').type('123456');
        cy.get('button[type="submit"]').click();

        // Verifica sucesso
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Login realizado com sucesso');
        });
    });

    it('Exibe erro ao tentar login com dados inválidos', () => {
        cy.visit('http://localhost:8000');

        // Espera os campos serem visíveis
        cy.get('#email').should('be.visible').type('errado@exemplo.com');
        cy.get('#password').should('be.visible').type('senhaerrada');
        cy.get('button[type="submit"]').click();

        // Verifica erro
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('E-mail ou senha inválidos');
        });
    });
});
