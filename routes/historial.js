
/*
// routes/historial.js
const express = require('express');
const router = express.Router();
const Historial = require('../models/Historial');

// ✅ GET: listar historial completo
router.get('/', async (req, res) => {
  try {
    const registros = await Historial.findAll({
      order: [['fecha', 'DESC']] // ordena por fecha descendente
    });
    res.json(registros); // devuelve JSON al frontend
  } catch (err) {
    console.error('Error al obtener historial:', err);
    res.status(500).json({ error: 'Error al obtener historial' });
  }
});

// ✅ POST: insertar un nuevo registro en historial (opcional, normalmente lo hace el middleware)
router.post('/', async (req, res) => {
  try {
    const registro = await Historial.create(req.body);
    res.status(201).json(registro); // devuelve el registro creado
  } catch (err) {
    console.error('Error al crear registro en historial:', err);
    res.status(500).json({ error: 'Error al crear registro en historial' });
  }
});

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const Historial = require('../models/Historial');

// Obtener todos los registros
router.get('/', async (req, res) => {
  try {
    const registros = await Historial.findAll({
      order: [['fecha', 'DESC']]
    });
    res.json(registros);
  } catch (err) {
    console.error("❌ Error al obtener historial:", err);
    res.status(500).json({ error: 'Error al obtener historial' });
  }
});

// Filtrar por entidad
router.get('/:entidad', async (req, res) => {
  try {
    const registros = await Historial.findAll({
      where: { entidad: req.params.entidad },
      order: [['fecha', 'DESC']]
    });
    res.json(registros);
  } catch (err) {
    console.error("❌ Error al filtrar historial:", err);
    res.status(500).json({ error: 'Error al filtrar historial' });
  }
});

module.exports = router;