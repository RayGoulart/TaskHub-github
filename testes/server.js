const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// Serve os arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota padrão para a página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

