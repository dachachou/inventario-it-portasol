
/*
// routes/inventarioSoftware.js
const express = require('express');
const router = express.Router();
const InventarioSoftware = require('../models/InventarioSoftware');

// Obtener todos los programas
router.get('/', async (req, res) => {
  try {
    const programas = await InventarioSoftware.findAll();
    res.json(programas);
  } catch (err) {
    console.error("❌ Error al obtener inventario_software:", err);
    res.status(500).json({ error: 'Error al obtener inventario de software' });
  }
});

module.exports = router;



// routes/inventarioSoftware.js
const express = require('express');
const router = express.Router();
const InventarioSoftware = require('../models/InventarioSoftware');

// Obtener todos los programas
router.get('/', async (req, res) => {
  try {
    const programas = await InventarioSoftware.findAll({
      attributes: [
        'id',
        'nombre',
        'version',
        'fabricante',
        'tamano',
        'fecha_instalacion',
        'fecha_registro',
        'dispositivo_id'
      ]
    });
    res.json(programas);
  } catch (err) {
    console.error("❌ Error al obtener inventario_software:", err);
    res.status(500).json({ error: 'Error al obtener inventario de software' });
  }
});

module.exports = router;







// routes/inventarioSoftware.js
const express = require('express');
const router = express.Router();
const InventarioSoftware = require('../models/InventarioSoftware');

// Obtener todos los programas
router.get('/', async (req, res) => {
  try {
    const programas = await InventarioSoftware.findAll({
      attributes: [
        'id',
        'nombre',
        'version',
        'fabricante',
        'tamano',
        'fecha_instalacion',
        'fecha_registro',
        'dispositivo_id'
      ]
    });
    res.json(programas);
  } catch (err) {
    console.error("❌ Error al obtener inventario_software:", err);
    res.status(500).json({ error: 'Error al obtener inventario de software' });
  }
});

// Insertar programas enviados por el agente externo
router.post('/', async (req, res) => {
  try {
    const { programas, dispositivo_id } = req.body;

    if (!programas || !Array.isArray(programas)) {
      return res.status(400).json({ error: 'Payload inválido: se esperaba un array de programas' });
    }

    const registros = [];
    for (const programa of programas) {
      const nuevo = await InventarioSoftware.create({
        nombre: programa.nombre,
        version: programa.version,
        fabricante: programa.fabricante,
        tamano: programa.tamano,
        fecha_instalacion: programa.fecha_instalacion,
        dispositivo_id: dispositivo_id
      });
      registros.push(nuevo);
    }

    res.json({ mensaje: '✅ Programas insertados correctamente', registros });
  } catch (err) {
    console.error("❌ Error al insertar programas en inventario_software:", err);
    res.status(500).json({ error: 'Error al insertar programas en inventario de software' });
  }
});

module.exports = router;
*/



// routes/inventarioSoftware.js
const express = require('express');
const router = express.Router();
const InventarioSoftware = require('../models/InventarioSoftware');

// Obtener todos los programas
router.get('/', async (req, res) => {
  try {
    const programas = await InventarioSoftware.findAll({
      attributes: [
        'id',
        'nombre',
        'version',
        'fabricante',
        'tamano',
        'fecha_instalacion',
        'fecha_registro',
        'dispositivo_id'
      ]
    });
    res.json(programas);
  } catch (err) {
    console.error("❌ Error al obtener inventario_software:", err);
    res.status(500).json({ error: 'Error al obtener inventario de software' });
  }
});

// Insertar programas enviados por el agente externo
router.post('/', async (req, res) => {
  try {
    const { programas, dispositivo_id } = req.body;

    if (!programas || !Array.isArray(programas)) {
      return res.status(400).json({ error: 'Payload inválido: se esperaba un array de programas' });
    }

    const registros = [];
    for (const programa of programas) {
      const nuevo = await InventarioSoftware.create({
        nombre: programa.nombre,
        version: programa.version,
        fabricante: programa.fabricante,
        tamano: programa.tamano,
        fecha_instalacion: programa.fecha_instalacion,
        dispositivo_id: dispositivo_id
      });
      registros.push(nuevo);
    }

    res.json({ mensaje: '✅ Programas insertados correctamente', registros });
  } catch (err) {
    console.error("❌ Error al insertar programas en inventario_software:", err);
    res.status(500).json({ error: 'Error al insertar programas en inventario de software' });
  }
});

module.exports = router;