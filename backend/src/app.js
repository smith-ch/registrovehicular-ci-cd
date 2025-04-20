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
app.listen(PORT, () => console.log(`Backend escuchando en puerto ${PORT}`));