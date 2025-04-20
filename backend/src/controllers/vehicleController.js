const Vehicle = require('../models/Vehicle');

exports.create = async (req, res) => {
  try { const v = await Vehicle.create(req.body); res.status(201).json(v); }
  catch (e) { res.status(400).json({ error: e.message }); }
};

exports.list = async (_, res) => {
  const list = await Vehicle.find();
  res.json(list);
};

exports.getOne = async (req, res) => {
  const v = await Vehicle.findById(req.params.id);
  v ? res.json(v) : res.status(404).end();
};

exports.update = async (req, res) => {
  const v = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(v);
};

exports.remove = async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id);
  res.status(204).end();
};