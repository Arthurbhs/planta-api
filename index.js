const express = require('express');
const app = express();

// Rota para a rota raiz '/'
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Inicia o servidor na porta especificada ou na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
