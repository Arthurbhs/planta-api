
const express = require('express');
const app = express();

// Restante do seu código do Express aqui


// Exemplo de dados de plantas
const plants = [
  { id: 1, name: 'Orquídea', origin: 'Tropical' },
  { id: 2, name: 'Suculenta', origin: 'Deserto' },
  { id: 3, name: 'Samambaia', origin: 'Floresta Tropical' },
];

// Rota para obter todas as plantas
app.get('/plants', function (req, res) {
  res.json(plants); // Retorna todas as plantas como um JSON
});

// Rota para obter uma planta específica pelo ID
app.get('/plants/:id', function (req, res) {
  const id = parseInt(req.params.id); // Obtém o parâmetro ID da URL e converte para número inteiro
  const plant = plants.find(p => p.id === id); // Procura a planta pelo ID

  if (!plant) {
    res.status(404).send('Planta não encontrada'); // Se não encontrar a planta, retorna status 404
  } else {
    res.json(plant); // Retorna a planta encontrada como JSON
  }
});

// Inicia o servidor na porta especificada ou na porta 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Servidor está rodando na porta 3000');
});
