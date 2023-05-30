const express = require('express');
const routes = require('./routes'); // Importa las rutas
const app = express();

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use('/api', routes); // Utiliza las rutas

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});