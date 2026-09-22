const express = require('express');
const app = express();
const PORT = 3000;

// Ruta GET /
app.get('/', (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// Ruta GET /hobbies
app.get('/hobbies', (req, res) => {
  res.send('I cycle, go boating, and play guitar.');
});

// Ruta GET /skills
app.get('/skills', (req, res) => {
  res.send('JavaScript, Node.js, and Express.js!');
});

// Ruta GET /api/profile (Respuesta JSON)
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Camper Bot',
    hobbies: ['cycling', 'boating', 'guitar'],
    skills: ['JavaScript', 'Node.js', 'Express.js']
  });
});

// Servidor en puerto 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});