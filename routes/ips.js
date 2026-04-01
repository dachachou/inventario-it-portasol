
/*

const express = require('express');
const router = express.Router();

// GET: listar direcciones IP
router.get('/', (req, res) => {
  res.json({ mensaje: 'Lista de IPs (demo)' });
});

// POST: asignar IP
router.post('/', (req, res) => {
  const nueva = req.body;
  res.status(201).json({ mensaje: 'IP asignada', data: nueva });
});

module.exports = router;


*/



/*
const express = require('express');
const router = express.Router();
const DireccionIP = require('../models/DireccionIP');

// GET: listar IPs
router.get('/', async (req, res) => {
  try {
    const ips = await DireccionIP.findAll();
    res.json(ips);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener IPs' });
  }
});

// POST: registrar IP
router.post('/', async (req, res) => {
  try {
    const nueva = await DireccionIP.create(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar IP' });
  }
});

module.exports = router;

*/




/*
const express = require('express');
const router = express.Router();
const DireccionIP = require('../models/DireccionIP');
const Historial = require('../models/Historial'); // ✅ importamos historial

// GET: listar IPs
router.get('/', async (req, res) => {
  try {
    const ips = await DireccionIP.findAll();
    res.json(ips);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener IPs' });
  }
});

// POST: registrar IP
router.post('/', async (req, res) => {
  try {
    const nueva = await DireccionIP.create(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'ips', // en plural para que coincida con el filtro del frontend
      entidad_id: nueva.ip_id,
      accion: 'CREAR',
      descripcion: `Se creó la IP ${nueva.direccion}`,
      usuario: 'admin'
    });

    res.status(201).json(nueva);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar IP' });
  }
});

// PUT: actualizar IP
router.put('/:id', async (req, res) => {
  try {
    const ip = await DireccionIP.findByPk(req.params.id);
    if (!ip) return res.status(404).json({ error: 'IP no encontrada' });

    await ip.update(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'ips',
      entidad_id: ip.ip_id,
      accion: 'EDITAR',
      descripcion: `Se actualizó la IP ${ip.direccion}`,
      usuario: 'admin'
    });

    res.json(ip);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar IP' });
  }
});

// DELETE: eliminar IP
router.delete('/:id', async (req, res) => {
  try {
    const ip = await DireccionIP.findByPk(req.params.id);
    if (!ip) return res.status(404).json({ error: 'IP no encontrada' });

    await ip.destroy();

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'ips',
      entidad_id: req.params.id,
      accion: 'ELIMINAR',
      descripcion: `Se eliminó la IP ${ip.direccion}`,
      usuario: 'admin'
    });

    res.json({ mensaje: 'IP eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar IP' });
  }
});

module.exports = router;
*/






const express = require('express');
const router = express.Router();
const DireccionIP = require('../models/DireccionIP');

// Obtener todas las direcciones IP
router.get('/', async (req, res) => {
  try {
    const direcciones = await DireccionIP.findAll({
      attributes: ['ip_id', 'ip_address', 'mac_address', 'fecha_asignacion', 'dispositivo_id']
    });
    res.json(direcciones);
  } catch (err) {
    console.error("❌ Error al obtener direcciones IP:", err);
    res.status(500).json({ error: 'Error al obtener direcciones IP' });
  }
});

// Insertar nueva dirección IP
router.post('/', async (req, res) => {
  try {
    const { ip_address, mac_address, fecha_asignacion, dispositivo_id } = req.body;

    if (!dispositivo_id) {
      return res.status(400).json({ error: 'Se requiere dispositivo_id' });
    }

    const nuevaIP = await DireccionIP.create({
      ip_address,
      mac_address,
      fecha_asignacion,
      dispositivo_id
    });

    res.json({ mensaje: '✅ Dirección IP insertada correctamente', registro: nuevaIP });
  } catch (err) {
    console.error("❌ Error al insertar dirección IP:", err);
    res.status(500).json({ error: 'Error al insertar dirección IP' });
  }
});

module.exports = router;