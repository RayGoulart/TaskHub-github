document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Simula validação de login
    if (email === 'teste@exemplo.com' && password === '123456') {
        alert('Login realizado com sucesso');
    } else {
        alert('E-mail ou senha inválidos');
    }
});
