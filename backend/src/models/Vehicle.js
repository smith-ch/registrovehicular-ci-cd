const { Schema, model } = require('mongoose');

const VehicleSchema = new Schema({
  placa: { type: String, required: true, unique: true },
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  año: { type: Number, required: true }
}, { timestamps: true });

module.exports = model('Vehicle', VehicleSchema);