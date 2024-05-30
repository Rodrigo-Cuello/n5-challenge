// app.js  

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para definir el entorno actual
app.use((req, res, next) => {
  res.locals.env = process.env.NODE_ENV || 'development';
  next();
});

// Ruta para mostrar el entorno actual
app.get('/', (req, res) => {
  res.send(`Estás en el entorno: ${res.locals.env}`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
