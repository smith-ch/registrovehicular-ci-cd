const mongoose = require('mongoose');

exports.connect = () => {
  const uri = process.env.MONGODB_URI || 'mongodb://db:27017/registrovehicular';
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Error DB:', err));
};