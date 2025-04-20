// config/db.js
const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/registrovehicular', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('🟢 Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('🔴 Error al conectar a MongoDB', error);
    process.exit(1);
  }
};

module.exports = { connect };
