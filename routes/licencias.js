
/*

const express = require('express');
const router = express.Router();

// GET: listar licencias
router.get('/', (req, res) => {
  res.json({ mensaje: 'Lista de licencias (demo)' });
});

// POST: registrar licencia
router.post('/', (req, res) => {
  const nueva = req.body;
  res.status(201).json({ mensaje: 'Licencia registrada', data: nueva });
});

module.exports = router;












const express = require('express');
const router = express.Router();
const Licencia = require('../models/Licencia');

// GET: listar licencias
router.get('/', async (req, res) => {
  try {
    const licencias = await Licencia.findAll();
    res.json(licencias);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener licencias' });
  }
});

// POST: registrar licencia
router.post('/', async (req, res) => {
  try {
    const nueva = await Licencia.create(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar licencia' });
  }
});

module.exports = router;












const express = require('express');
const router = express.Router();
const Licencia = require('../models/Licencia');

// GET: listar licencias
router.get('/', async (req, res) => {
  try {
    const licencias = await Licencia.findAll();
    res.json(licencias);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener licencias' });
  }
});

// POST: registrar licencia
router.post('/', async (req, res) => {
  try {
    const nueva = await Licencia.create(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar licencia' });
  }
});

// PUT: actualizar licencia
router.put('/:id', async (req, res) => {
  try {
    const licencia = await Licencia.findByPk(req.params.id);
    if (!licencia) {
      return res.status(404).json({ error: 'Licencia no encontrada' });
    }
    await licencia.update(req.body); // ✅ aquí se actualizan todos los campos
    res.json(licencia);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar licencia' });
  }
});

// DELETE: eliminar licencia
router.delete('/:id', async (req, res) => {
  try {
    const licencia = await Licencia.findByPk(req.params.id);
    if (!licencia) {
      return res.status(404).json({ error: 'Licencia no encontrada' });
    }
    await licencia.destroy();
    res.json({ mensaje: 'Licencia eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar licencia' });
  }
});

module.exports = router;

*/





/*
const express = require('express');
const router = express.Router();
const Licencia = require('../models/Licencia');

// GET: listar licencias
router.get('/', async (req, res) => {
  try {
    const licencias = await Licencia.findAll();
    res.json(licencias);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener licencias' });
  }
});

// POST: registrar licencia
router.post('/', async (req, res) => {
  try {
    const nueva = await Licencia.create(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar licencia' });
  }
});

// PUT: actualizar licencia
router.put('/:id', async (req, res) => {
  try {
    const licencia = await Licencia.findByPk(req.params.id);
    if (!licencia) {
      return res.status(404).json({ error: 'Licencia no encontrada' });
    }
    await licencia.update(req.body); // ✅ aquí se aplican los cambios
    res.json(licencia);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar licencia' });
  }
});

// DELETE: eliminar licencia
router.delete('/:id', async (req, res) => {
  try {
    const licencia = await Licencia.findByPk(req.params.id);
    if (!licencia) {
      return res.status(404).json({ error: 'Licencia no encontrada' });
    }
    await licencia.destroy();
    res.json({ mensaje: 'Licencia eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar licencia' });
  }
});

module.exports = router;

*/



/*
const auditoria = require('../middlewares/auditoria'); // ✅ importamos middleware
const express = require('express');
const router = express.Router();
const Licencia = require('../models/Licencia');
const Historial = require('../models/Historial'); // ✅ importamos historial

// GET: listar licencias
router.get('/', async (req, res) => {
  try {
    const licencias = await Licencia.findAll();
    res.json(licencias);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener licencias' });
  }
});

// POST: registrar licencia
router.post('/', async (req, res) => {
  try {
    const nueva = await Licencia.create(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'licencia',
      entidad_id: nueva.licencia_id,
      accion: 'CREAR',
      descripcion: `Se creó la licencia ${nueva.nombre_software}`,
      usuario: 'admin'
    });

    res.status(201).json(nueva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar licencia' });
  }
});

// PUT: actualizar licencia
router.put('/:id', async (req, res) => {
  try {
    const licencia = await Licencia.findByPk(req.params.id);
    if (!licencia) {
      return res.status(404).json({ error: 'Licencia no encontrada' });
    }

    await licencia.update(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'licencia',
      entidad_id: licencia.licencia_id,
      accion: 'EDITAR',
      descripcion: `Se actualizó la licencia ${licencia.nombre_software}`,
      usuario: 'admin'
    });

    res.json(licencia);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar licencia' });
  }
});

// DELETE: eliminar licencia
router.delete('/:id', async (req, res) => {
  try {
    const licencia = await Licencia.findByPk(req.params.id);
    if (!licencia) {
      return res.status(404).json({ error: 'Licencia no encontrada' });
    }

    await licencia.destroy();

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'licencia',
      entidad_id: req.params.id,
      accion: 'ELIMINAR',
      descripcion: `Se eliminó la licencia ${licencia.nombre_software}`,
      usuario: 'admin'
    });

    res.json({ mensaje: 'Licencia eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar licencia' });
  }
});

module.exports = router;

*/

const express = require('express');
const router = express.Router();
const Licencia = require('../models/Licencia');
const auditoria = require('../middlewares/auditoria'); // ✅ importamos middleware

// GET: listar licencias
router.get('/', async (req, res) => {
  try {
    const licencias = await Licencia.findAll();
    res.json(licencias);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener licencias' });
  }
});

// POST: registrar licencia
router.post('/', auditoria, async (req, res) => {
  try {
    const nueva = await Licencia.create(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar licencia' });
  }
});

// PUT: actualizar licencia
router.put('/:id', auditoria, async (req, res) => {
  try {
    const licencia = await Licencia.findByPk(req.params.id);
    if (!licencia) {
      return res.status(404).json({ error: 'Licencia no encontrada' });
    }

    await licencia.update(req.body);
    res.json(licencia);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar licencia' });
  }
});

// DELETE: eliminar licencia
router.delete('/:id', auditoria, async (req, res) => {
  try {
    const licencia = await Licencia.findByPk(req.params.id);
    if (!licencia) {
      return res.status(404).json({ error: 'Licencia no encontrada' });
    }

    await licencia.destroy();
    res.json({ mensaje: 'Licencia eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar licencia' });
  }
});

module.exports = router;