
/*
// routes/empleados.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensaje: 'Lista de empleados (demo)' });
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  res.status(201).json({ mensaje: 'Empleado registrado', data: nuevo });
});

module.exports = router;

*/



/*
const express = require('express');
const router = express.Router();
const Empleado = require('../models/Empleados');

// GET: listar empleados
router.get('/', async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
});

// POST: registrar empleado
router.post('/', async (req, res) => {
  try {
    const nuevo = await Empleado.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar empleado' });
  }
});

module.exports = router;

*/




/*

const express = require('express');
const router = express.Router();
const Empleado = require('../models/Empleados');

// CREATE: registrar empleado
router.post('/', async (req, res) => {
  try {
    const nuevo = await Empleado.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar empleado' });
  }
});

// READ: listar empleados
router.get('/', async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
});

// READ: obtener empleado por ID
router.get('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(empleado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener empleado' });
  }
});

// UPDATE: actualizar empleado
router.put('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    await empleado.update(req.body);
    res.json(empleado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar empleado' });
  }
});

// DELETE: eliminar empleado
router.delete('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    await empleado.destroy();
    res.json({ mensaje: 'Empleado eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar empleado' });
  }
});

module.exports = router;

*/







const express = require('express');
const router = express.Router();
const Empleado = require('../models/Empleados');
const Historial = require('../models/Historial'); // ✅ importamos historial

// CREATE: registrar empleado
router.post('/', async (req, res) => {
  try {
    const nuevo = await Empleado.create(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'empleados',
      entidad_id: nuevo.empleado_id,
      accion: 'CREAR',
      descripcion: `Se creó el empleado ${nuevo.nombre}`,
      usuario: 'admin'
    });

    res.status(201).json(nuevo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar empleado' });
  }
});

// READ: listar empleados
router.get('/', async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
});

// READ: obtener empleado por ID
router.get('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(empleado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener empleado' });
  }
});

// UPDATE: actualizar empleado
router.put('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }

    await empleado.update(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'empleados',
      entidad_id: empleado.empleado_id,
      accion: 'EDITAR',
      descripcion: `Se actualizó el empleado ${empleado.nombre}`,
      usuario: 'admin'
    });

    res.json(empleado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar empleado' });
  }
});

// DELETE: eliminar empleado
router.delete('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }

    await empleado.destroy();

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'empleados',
      entidad_id: req.params.id,
      accion: 'ELIMINAR',
      descripcion: `Se eliminó el empleado ${empleado.nombre}`,
      usuario: 'admin'
    });

    res.json({ mensaje: 'Empleado eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar empleado' });
  }
});

module.exports = router;