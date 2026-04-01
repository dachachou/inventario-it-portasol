
/*


const express = require('express');
const router = express.Router();
const Capacidad = require('../models/Capacidades');

// CREATE
router.post('/', async (req, res) => {
  try {
    const nueva = await Capacidad.create(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar capacidad' });
  }
});

// READ: todas
router.get('/', async (req, res) => {
  try {
    const capacidades = await Capacidad.findAll();
    res.json(capacidades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener capacidades' });
  }
});

// READ: por ID
router.get('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) return res.status(404).json({ error: 'Capacidad no encontrada' });
    res.json(capacidad);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener capacidad' });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) return res.status(404).json({ error: 'Capacidad no encontrada' });
    await capacidad.update(req.body);
    res.json(capacidad);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar capacidad' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) return res.status(404).json({ error: 'Capacidad no encontrada' });
    await capacidad.destroy();
    res.json({ mensaje: 'Capacidad eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar capacidad' });
  }
});

module.exports = router;

*/



/*


const express = require('express');
const router = express.Router();
const Capacidad = require('../models/Capacidades');

// GET: listar capacidades
router.get('/', async (req, res) => {
  try {
    const capacidades = await Capacidad.findAll();
    res.json(capacidades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener capacidades' });
  }
});

// POST: registrar capacidad
router.post('/', async (req, res) => {
  try {
    const nueva = await Capacidad.create(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar capacidad' });
  }
});

// PUT: actualizar capacidad
router.put('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) {
      return res.status(404).json({ error: 'Capacidad no encontrada' });
    }
    await capacidad.update(req.body);
    res.json(capacidad);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar capacidad' });
  }
});

// DELETE: eliminar capacidad
router.delete('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) {
      return res.status(404).json({ error: 'Capacidad no encontrada' });
    }
    await capacidad.destroy();
    res.json({ mensaje: 'Capacidad eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar capacidad' });
  }
});

module.exports = router;

*/







/*

const express = require('express');
const router = express.Router();
const Capacidad = require('../models/Capacidades');
const Dispositivo = require('../models/Dispositivo');

// GET: listar todas las capacidades
router.get('/', async (req, res) => {
  try {
    const capacidades = await Capacidad.findAll({ include: Dispositivo });
    res.json(capacidades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener capacidades' });
  }
});

// POST: registrar nueva capacidad
router.post('/', async (req, res) => {
  try {
    const { dispositivo_id } = req.body;

    // Validar que el dispositivo exista
    const dispositivo = await Dispositivo.findByPk(dispositivo_id);
    if (!dispositivo) {
      return res.status(400).json({ error: 'El dispositivo no existe, no se puede asignar capacidad' });
    }

    const nueva = await Capacidad.create(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar capacidad' });
  }
});



router.get('/count', async (req, res) => {
  try {
    const total = await Capacidad.count();
    res.json({ total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al contar capacidades' });
  }
});






// PUT: actualizar capacidad
router.put('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) {
      return res.status(404).json({ error: 'Capacidad no encontrada' });
    }
    await capacidad.update(req.body);
    res.json(capacidad);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar capacidad' });
  }
});

// DELETE: eliminar capacidad
router.delete('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) {
      return res.status(404).json({ error: 'Capacidad no encontrada' });
    }
    await capacidad.destroy();
    res.json({ mensaje: 'Capacidad eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar capacidad' });
  }
});

module.exports = router;

*/






/*

const express = require('express');
const router = express.Router();
const Capacidad = require('../models/Capacidades');
const Dispositivo = require('../models/Dispositivo');
const Historial = require('../models/Historial'); // ✅ importamos historial

// GET: listar todas las capacidades
router.get('/', async (req, res) => {
  try {
    const capacidades = await Capacidad.findAll({ include: Dispositivo });
    res.json(capacidades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener capacidades' });
  }
});

// POST: registrar nueva capacidad
router.post('/', async (req, res) => {
  try {
    const { dispositivo_id } = req.body;

    // Validar que el dispositivo exista
    const dispositivo = await Dispositivo.findByPk(dispositivo_id);
    if (!dispositivo) {
      return res.status(400).json({ error: 'El dispositivo no existe, no se puede asignar capacidad' });
    }

    const nueva = await Capacidad.create(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'capacidades',
      entidad_id: nueva.capacidad_id,
      accion: 'CREAR',
      descripcion: `Se creó la capacidad ${nueva.nombre} para el dispositivo ${dispositivo.nombre}`,
      usuario: 'admin'
    });

    res.status(201).json(nueva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar capacidad' });
  }
});

// GET: contar capacidades
router.get('/count', async (req, res) => {
  try {
    const total = await Capacidad.count();
    res.json({ total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al contar capacidades' });
  }
});

// PUT: actualizar capacidad
router.put('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) {
      return res.status(404).json({ error: 'Capacidad no encontrada' });
    }

    await capacidad.update(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'capacidades',
      entidad_id: capacidad.capacidad_id,
      accion: 'EDITAR',
      descripcion: `Se actualizó la capacidad ${capacidad.nombre}`,
      usuario: 'admin'
    });

    res.json(capacidad);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar capacidad' });
  }
});

// DELETE: eliminar capacidad
router.delete('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) {
      return res.status(404).json({ error: 'Capacidad no encontrada' });
    }

    await capacidad.destroy();

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'capacidades',
      entidad_id: req.params.id,
      accion: 'ELIMINAR',
      descripcion: `Se eliminó la capacidad ${capacidad.nombre}`,
      usuario: 'admin'
    });

    res.json({ mensaje: 'Capacidad eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar capacidad' });
  }
});

module.exports = router;

*/

/*

const express = require('express');
const router = express.Router();
const Capacidad = require('../models/Capacidades');
const Dispositivo = require('../models/Dispositivo');
const Historial = require('../models/Historial'); // ✅ importamos historial



// Disco duro
let disco = 'Por detectar';
try {
  const rawDisco = execSync('wmic diskdrive get size').toString();
  const lines = rawDisco.split('\n').map(l => l.trim()).filter(l => l && !isNaN(l));
  if (lines.length > 0) {
    const sizeBytes = parseInt(lines[0], 10);
    const sizeGB = Math.round(sizeBytes / (1024 * 1024 * 1024));
    disco = `${sizeGB} GB`;
  }
} catch {}

// Tarjeta gráfica
let gpu = 'Por detectar';
try {
  const rawGPU = execSync('wmic path win32_videocontroller get name').toString();
  const lines = rawGPU.split('\n').map(l => l.trim()).filter(l => l && l !== 'Name');
  if (lines.length > 0) {
    gpu = lines[0];
  }
} catch {}

const capacidades = {
  memoria: `${ramGB} GB`,
  disco_duro: disco,
  tarjeta_grafica: gpu,
  procesador: cpu
};






// GET: listar todas las capacidades
router.get('/', async (req, res) => {
  try {
    const capacidades = await Capacidad.findAll({ include: Dispositivo });
    res.json(capacidades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener capacidades' });
  }
});

// POST: registrar nueva capacidad
router.post('/', async (req, res) => {
  try {
    const { dispositivo_id } = req.body;

    // Validar que el dispositivo exista
    const dispositivo = await Dispositivo.findByPk(dispositivo_id);
    if (!dispositivo) {
      return res.status(400).json({ error: 'El dispositivo no existe, no se puede asignar capacidad' });
    }

    const nueva = await Capacidad.create(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'capacidades',
      entidad_id: nueva.capacidad_id,
      accion: 'CREAR',
      descripcion: `Se creó la capacidad (RAM: ${nueva.memoria}, Disco: ${nueva.disco_duro}, GPU: ${nueva.tarjeta_grafica}, CPU: ${nueva.procesador}) para el dispositivo ${dispositivo.hostname}`,
      usuario: 'admin'
    });

    res.status(201).json(nueva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar capacidad' });
  }
});

// GET: contar capacidades
router.get('/count', async (req, res) => {
  try {
    const total = await Capacidad.count();
    res.json({ total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al contar capacidades' });
  }
});

// PUT: actualizar capacidad
router.put('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) {
      return res.status(404).json({ error: 'Capacidad no encontrada' });
    }

    await capacidad.update(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'capacidades',
      entidad_id: capacidad.capacidad_id,
      accion: 'EDITAR',
      descripcion: `Se actualizó la capacidad (RAM: ${capacidad.memoria}, Disco: ${capacidad.disco_duro}, GPU: ${capacidad.tarjeta_grafica}, CPU: ${capacidad.procesador})`,
      usuario: 'admin'
    });

    res.json(capacidad);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar capacidad' });
  }
});

// DELETE: eliminar capacidad
router.delete('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) {
      return res.status(404).json({ error: 'Capacidad no encontrada' });
    }

    await capacidad.destroy();

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'capacidades',
      entidad_id: req.params.id,
      accion: 'ELIMINAR',
      descripcion: `Se eliminó la capacidad (RAM: ${capacidad.memoria}, Disco: ${capacidad.disco_duro}, GPU: ${capacidad.tarjeta_grafica}, CPU: ${capacidad.procesador})`,
      usuario: 'admin'
    });

    res.json({ mensaje: 'Capacidad eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar capacidad' });
  }
});

module.exports = router;

*/









/*


const express = require('express');
const router = express.Router();
const Capacidad = require('../models/Capacidades');
const Dispositivo = require('../models/Dispositivo');
const Historial = require('../models/Historial'); // ✅ importamos historial

// GET: listar todas las capacidades
router.get('/', async (req, res) => {
  try {
    const capacidades = await Capacidad.findAll({ include: Dispositivo });
    res.json(capacidades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener capacidades' });
  }
});

// POST: registrar nueva capacidad
router.post('/', async (req, res) => {
  try {
    const { dispositivo_id } = req.body;

    // Validar que el dispositivo exista
    const dispositivo = await Dispositivo.findByPk(dispositivo_id);
    if (!dispositivo) {
      return res.status(400).json({ error: 'El dispositivo no existe, no se puede asignar capacidad' });
    }

    const nueva = await Capacidad.create(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'capacidades',
      entidad_id: nueva.capacidad_id,
      accion: 'CREAR',
      descripcion: `Se creó la capacidad (RAM: ${nueva.memoria}, Disco: ${nueva.disco_duro}, GPU: ${nueva.tarjeta_grafica}, CPU: ${nueva.procesador}) para el dispositivo ${dispositivo.hostname}`,
      usuario: 'admin'
    });

    res.status(201).json(nueva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar capacidad' });
  }
});

// GET: contar capacidades
router.get('/count', async (req, res) => {
  try {
    const total = await Capacidad.count();
    res.json({ total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al contar capacidades' });
  }
});

// PUT: actualizar capacidad
router.put('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) {
      return res.status(404).json({ error: 'Capacidad no encontrada' });
    }

    await capacidad.update(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'capacidades',
      entidad_id: capacidad.capacidad_id,
      accion: 'EDITAR',
      descripcion: `Se actualizó la capacidad (RAM: ${capacidad.memoria}, Disco: ${capacidad.disco_duro}, GPU: ${capacidad.tarjeta_grafica}, CPU: ${capacidad.procesador})`,
      usuario: 'admin'
    });

    res.json(capacidad);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar capacidad' });
  }
});

// DELETE: eliminar capacidad
router.delete('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) {
      return res.status(404).json({ error: 'Capacidad no encontrada' });
    }

    await capacidad.destroy();

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'capacidades',
      entidad_id: req.params.id,
      accion: 'ELIMINAR',
      descripcion: `Se eliminó la capacidad (RAM: ${capacidad.memoria}, Disco: ${capacidad.disco_duro}, GPU: ${capacidad.tarjeta_grafica}, CPU: ${capacidad.procesador})`,
      usuario: 'admin'
    });

    res.json({ mensaje: 'Capacidad eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar capacidad' });
  }
});

module.exports = router;

*/



const express = require('express');
const router = express.Router();
const Capacidad = require('../models/Capacidades');
const Dispositivo = require('../models/Dispositivo');
const Historial = require('../models/Historial'); // ✅ importamos historial

// GET: listar todas las capacidades
router.get('/', async (req, res) => {
  try {
    const capacidades = await Capacidad.findAll({ include: Dispositivo });
    res.json(capacidades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener capacidades' });
  }
});

// POST: registrar nueva capacidad
router.post('/', async (req, res) => {
  try {
    const { dispositivo_id } = req.body;

    // Validar que el dispositivo exista
    const dispositivo = await Dispositivo.findByPk(dispositivo_id);
    if (!dispositivo) {
      return res.status(400).json({ error: 'El dispositivo no existe, no se puede asignar capacidad' });
    }

    const nueva = await Capacidad.create(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'capacidades',
      entidad_id: nueva.capacidad_id,
      accion: 'CREAR',
      descripcion: `Se creó la capacidad (RAM: ${nueva.memoria}, Disco: ${nueva.disco_duro}, GPU: ${nueva.tarjeta_grafica}, CPU: ${nueva.procesador}) para el dispositivo ${dispositivo.hostname}`,
      usuario: 'admin'
    });

    res.status(201).json(nueva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar capacidad' });
  }
});

// GET: contar capacidades
router.get('/count', async (req, res) => {
  try {
    const total = await Capacidad.count();
    res.json({ total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al contar capacidades' });
  }
});

// PUT: actualizar capacidad
router.put('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) {
      return res.status(404).json({ error: 'Capacidad no encontrada' });
    }

    await capacidad.update(req.body);

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'capacidades',
      entidad_id: capacidad.capacidad_id,
      accion: 'EDITAR',
      descripcion: `Se actualizó la capacidad (RAM: ${capacidad.memoria}, Disco: ${capacidad.disco_duro}, GPU: ${capacidad.tarjeta_grafica}, CPU: ${capacidad.procesador})`,
      usuario: 'admin'
    });

    res.json(capacidad);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar capacidad' });
  }
});

// DELETE: eliminar capacidad
router.delete('/:id', async (req, res) => {
  try {
    const capacidad = await Capacidad.findByPk(req.params.id);
    if (!capacidad) {
      return res.status(404).json({ error: 'Capacidad no encontrada' });
    }

    await capacidad.destroy();

    // ✅ registrar en historial
    await Historial.create({
      entidad: 'capacidades',
      entidad_id: req.params.id,
      accion: 'ELIMINAR',
      descripcion: `Se eliminó la capacidad (RAM: ${capacidad.memoria}, Disco: ${capacidad.disco_duro}, GPU: ${capacidad.tarjeta_grafica}, CPU: ${capacidad.procesador})`,
      usuario: 'admin'
    });

    res.json({ mensaje: 'Capacidad eliminada correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar capacidad' });
  }
});

module.exports = router;