const express = require('express');
const app = express();

// Dados fictícios das flores
const flowers = [
  { name: 'Orquídea', origin: 'Tropical' },
  { name: 'Girassol', origin: 'Américas' },
  { name: 'Tulipa', origin: 'Europa e Ásia' },
];

// Rota para a rota raiz '/'
app.get('/', (req, res) => {
  res.json(flowers); // Retorna os dados das flores como JSON
});

// Inicia o servidor na porta especificada ou na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
