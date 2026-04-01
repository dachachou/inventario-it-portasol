
/*
// routes/dispositivos.js
const express = require('express');
const router = express.Router();
const Dispositivo = require('../models/Dispositivo');

router.post('/', async (req, res) => {
  try {
    const nuevo = await Dispositivo.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar dispositivo' });
  }
});

module.exports = router;
*/


/*
// routes/dispositivos.js
const express = require('express');
const router = express.Router();

// Endpoint GET: listar dispositivos
router.get('/', (req, res) => {
  res.json({ mensaje: 'Lista de dispositivos (demo)' });
});

// Endpoint POST: registrar dispositivo
router.post('/', (req, res) => {
  const nuevo = req.body;
  res.status(201).json({ mensaje: 'Dispositivo registrado', data: nuevo });
});

module.exports = router;

*/


/*

const express = require('express');
const router = express.Router();
const Dispositivo = require('../models/Dispositivo');

// GET: listar dispositivos
router.get('/', async (req, res) => {
  try {
    const dispositivos = await Dispositivo.findAll();
    res.json(dispositivos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener dispositivos' });
  }
});

// POST: registrar dispositivo
router.post('/', async (req, res) => {
  try {
    const nuevo = await Dispositivo.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar dispositivo' });
  }
});

module.exports = router;

*/


/*

const express = require('express');
const router = express.Router();
const Dispositivo = require('../models/Dispositivo');

// GET: listar dispositivos
router.get('/', async (req, res) => {
  try {
    const dispositivos = await Dispositivo.findAll();
    res.json(dispositivos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener dispositivos' });
  }
});

// POST: registrar dispositivo
router.post('/', async (req, res) => {
  try {
    const nuevo = await Dispositivo.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar dispositivo' });
  }
});

// PUT: actualizar dispositivo
router.put('/:id', async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByPk(req.params.id);
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    // ✅ Actualiza todos los campos enviados desde el frontend
    await dispositivo.update({
      hostname: req.body.hostname,
      tipo: req.body.tipo,
      fabricante: req.body.fabricante,
      modelo: req.body.modelo,
      numero_serie: req.body.numero_serie,
      estado: req.body.estado,
      fecha_asignacion: req.body.fecha_asignacion,
      descripcion: req.body.descripcion,
      empleado_id: req.body.empleado_id
    });

    res.json(dispositivo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar dispositivo' });
  }
});

// DELETE: eliminar dispositivo
router.delete('/:id', async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByPk(req.params.id);
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    await dispositivo.destroy();
    res.json({ mensaje: 'Dispositivo eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar dispositivo' });
  }
});

module.exports = router;

*/







/*

const express = require('express');
const router = express.Router();
const Dispositivo = require('../models/Dispositivo');
const Historial = require('../models/Historial'); // ✅ importamos historial

// GET: listar dispositivos
router.get('/', async (req, res) => {
  try {
    const dispositivos = await Dispositivo.findAll();
    res.json(dispositivos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener dispositivos' });
  }
});

// POST: registrar dispositivo
router.post('/', async (req, res) => {
  try {
    const nuevo = await Dispositivo.create(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'dispositivo',
      entidad_id: nuevo.dispositivo_id,
      accion: 'CREAR',
      descripcion: `Se creó el dispositivo ${nuevo.hostname}`,
      usuario: 'admin'
    });

    res.status(201).json(nuevo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar dispositivo' });
  }
});

// PUT: actualizar dispositivo
router.put('/:id', async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByPk(req.params.id);
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    // ✅ Actualiza todos los campos enviados desde el frontend
    await dispositivo.update({
      hostname: req.body.hostname,
      tipo: req.body.tipo,
      fabricante: req.body.fabricante,
      modelo: req.body.modelo,
      numero_serie: req.body.numero_serie,
      estado: req.body.estado,
      fecha_asignacion: req.body.fecha_asignacion,
      descripcion: req.body.descripcion,
      empleado_id: req.body.empleado_id
    });

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'dispositivo',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'EDITAR',
      descripcion: `Se actualizó el dispositivo ${dispositivo.hostname}`,
      usuario: 'admin'
    });

    res.json(dispositivo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar dispositivo' });
  }
});

// DELETE: eliminar dispositivo
router.delete('/:id', async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByPk(req.params.id);
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    await dispositivo.destroy();

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'dispositivo',
      entidad_id: req.params.id,
      accion: 'ELIMINAR',
      descripcion: `Se eliminó el dispositivo ${dispositivo.hostname}`,
      usuario: 'admin'
    });

    res.json({ mensaje: 'Dispositivo eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar dispositivo' });
  }
});

module.exports = router;

*/




/*
const express = require('express');
const router = express.Router();
const Dispositivo = require('../models/Dispositivo');
const Historial = require('../models/Historial'); // ✅ importamos historial

// GET: listar dispositivos
router.get('/', async (req, res) => {
  try {
    const dispositivos = await Dispositivo.findAll();
    res.json(dispositivos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener dispositivos' });
  }
});

// POST: registrar dispositivo
router.post('/', async (req, res) => {
  try {
    const nuevo = await Dispositivo.create(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'dispositivo',
      entidad_id: nuevo.dispositivo_id,
      accion: 'CREAR',
      descripcion: `Se creó el dispositivo ${nuevo.hostname}`,
      usuario: 'admin'
    });

    res.status(201).json(nuevo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar dispositivo' });
  }
});

// PUT: actualizar dispositivo
router.put('/:id', async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByPk(req.params.id);
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    // ✅ Actualiza todos los campos enviados desde el frontend
    await dispositivo.update({
      hostname: req.body.hostname,
      tipo: req.body.tipo,
      fabricante: req.body.fabricante,
      modelo: req.body.modelo,
      numero_serie: req.body.numero_serie,
      estado: req.body.estado,
      fecha_asignacion: req.body.fecha_asignacion,
      descripcion: req.body.descripcion,
      empleado_id: req.body.empleado_id
    });

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'dispositivo',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'EDITAR',
      descripcion: `Se actualizó el dispositivo ${dispositivo.hostname}`,
      usuario: 'admin'
    });

    res.json(dispositivo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar dispositivo' });
  }
});

// DELETE: eliminar dispositivo
router.delete('/:id', async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByPk(req.params.id);
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    await dispositivo.destroy();

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'dispositivo',
      entidad_id: req.params.id,
      accion: 'ELIMINAR',
      descripcion: `Se eliminó el dispositivo ${dispositivo.hostname}`,
      usuario: 'admin'
    });

    res.json({ mensaje: 'Dispositivo eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar dispositivo' });
  }
});

module.exports = router;

*/

/*
const express = require('express');
const router = express.Router();
const Dispositivo = require('../models/Dispositivo');
const auditoria = require('../middlewares/auditoria'); // ✅ usamos middleware

// GET: listar dispositivos
router.get('/', async (req, res) => {
  try {
    const dispositivos = await Dispositivo.findAll();
    res.json(dispositivos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener dispositivos' });
  }
});

// POST: registrar dispositivo
router.post('/', auditoria, async (req, res) => {
  try {
    const nuevo = await Dispositivo.create(req.body);
    res.status(201).json(nuevo); // ✅ devolvemos objeto completo
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar dispositivo' });
  }
});

// PUT: actualizar dispositivo
router.put('/:id', auditoria, async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByPk(req.params.id);
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    await dispositivo.update(req.body);
    res.json(dispositivo); // ✅ devolvemos objeto completo
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar dispositivo' });
  }
});

// DELETE: eliminar dispositivo
router.delete('/:id', auditoria, async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByPk(req.params.id);
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    await dispositivo.destroy();
    res.json({ mensaje: 'Dispositivo eliminado correctamente', dispositivo_id: req.params.id }); 
    // ✅ devolvemos también el ID para que el middleware lo capture
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar dispositivo' });
  }
});

module.exports = router;

*/







const express = require('express');
const router = express.Router();
const Dispositivo = require('../models/Dispositivo');
const auditoria = require('../middlewares/auditoria'); // ✅ usamos middleware

// GET: listar dispositivos
router.get('/', async (req, res) => {
  try {
    const dispositivos = await Dispositivo.findAll();
    res.json(dispositivos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener dispositivos' });
  }
});

// POST: registrar dispositivo
router.post('/', auditoria, async (req, res) => {
  try {
    const nuevo = await Dispositivo.create(req.body);
    res.status(201).json(nuevo); // ✅ devolvemos objeto completo
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar dispositivo' });
  }
});

// PUT: actualizar dispositivo
router.put('/:id', auditoria, async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByPk(req.params.id);
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    await dispositivo.update(req.body);
    res.json(dispositivo); // ✅ devolvemos objeto completo
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar dispositivo' });
  }
});

// DELETE: eliminar dispositivo
router.delete('/:id', auditoria, async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByPk(req.params.id);
    if (!dispositivo) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    await dispositivo.destroy();
    res.json({ mensaje: 'Dispositivo eliminado correctamente', dispositivo_id: req.params.id }); 
    // ✅ devolvemos también el ID para que el middleware lo capture
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar dispositivo' });
  }
});

module.exports = router;