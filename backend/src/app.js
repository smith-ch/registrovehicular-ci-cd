require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
app.use(cors());
app.use(express.json());

db.connect();
app.use('/api/vehicles', vehicleRoutes);

const PORT = process.env.PORT || 3000;

// Solo escuchar si no estamos en un entorno de pruebas
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Backend escuchando en puerto ${PORT}`));
}

module.exports = app;  // Exporta la aplicación para las pruebas
