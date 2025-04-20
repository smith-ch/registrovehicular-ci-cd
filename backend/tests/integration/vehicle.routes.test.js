// tests/integration/vehicle.routes.test.js
const request = require('supertest');
const app = require('../../src/app.server');           // si renombraste
const Vehicle = require('../../src/models/vehicle.model');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

jest.setTimeout(20000);  // timeout 20s para este archivo

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  if (mongoServer) {
    await mongoose.disconnect();
    await mongoServer.stop();
  }
});

beforeEach(async () => {
  await Vehicle.deleteMany({});
});

describe('Rutas de vehículos', () => {
  it('GET /api/vehicles debe devolver un array', async () => {
    const res = await request(app).get('/api/vehicles');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/vehicles debe crear un vehículo', async () => {
    const newVehicle = {
      placa: 'ABC123',
      marca: 'Toyota',
      modelo: 'Corolla',
      año: 2022
    };
    const res = await request(app).post('/api/vehicles').send(newVehicle);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.placa).toBe('ABC123');
  });
});
