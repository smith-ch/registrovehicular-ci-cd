// tests/unit/vehicle.model.test.js
const Vehicle = require('../../src/models/vehicle.model'); // Ajusta si tu modelo está en otra ruta

describe('Modelo Vehicle', () => {
  it('Debe crear una instancia de vehículo válida', () => {
    const vehiculo = new Vehicle({
      marca: 'Honda',
      modelo: 'Civic',
      año: 2020
    });

    expect(vehiculo.marca).toBe('Honda');
    expect(vehiculo.modelo).toBe('Civic');
    expect(vehiculo.año).toBe(2020);
  });
});
