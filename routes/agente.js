

/*


const express = require('express');
const router = express.Router();

// Ruta POST para recibir datos del agente externo
router.post('/', async (req, res) => {
  try {
    console.log("📥 Petición recibida en /api/agente");
    console.log("➡️ Payload recibido:", req.body);

    // Aquí iría la lógica para guardar en la base de datos
    res.json({ mensaje: 'Datos recibidos correctamente' });
  } catch (err) {
    console.error("❌ Error en /api/agente:", err);
    res.status(500).json({ error: 'Error al procesar datos del agente' });
  }
});

module.exports = router;

*/
/*

const express = require('express');
const router = express.Router();

// Importar modelos
const Empleados = require('../models/Empleados');
const Dispositivo = require('../models/Dispositivo');
const DireccionIP = require('../models/DireccionIP');
const Historial = require('../models/Historial');

// Ruta POST para recibir datos del agente externo
router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    console.log("📥 Petición recibida en /api/agente");
    console.log("➡️ Payload recibido:", datos);

    // Insertar empleado
    const empleado = await Empleados.create({
      nombre: datos.usuario || 'SIN-USUARIO',
      puesto: 'Usuario Local',
      departamento: datos.sistemaOperativo || 'SIN-SO'
    });
    console.log("✅ Empleado insertado:", empleado.toJSON());

    // Insertar dispositivo
    const dispositivo = await Dispositivo.create({
      nombre: datos.serial?.trim() || 'SIN-SERIAL',
      tipo: 'PC',
      marca: datos.fabricante || 'Desconocido',
      modelo: datos.cpu || 'Desconocido',
      capacidad_id: null // si tienes relación con capacidades
    });
    console.log("✅ Dispositivo insertado:", dispositivo.toJSON());

    // Insertar IP
    const ipData = datos.redes?.Ethernet?.[0] || {};
    const ip = await DireccionIP.create({
      direccion: ipData.address || 'Desconocida',
      mac: ipData.mac || 'Desconocida',
      dispositivo_id: dispositivo.dispositivo_id
    });
    console.log("🌐 IP insertada:", ip.toJSON());

    // Insertar historial
    const historial = await Historial.create({
      entidad: 'agente',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'REPORTE',
      descripcion: `Agente reportó datos del equipo ${dispositivo.nombre}`,
      usuario: empleado.nombre
    });
    console.log("📘 Historial registrado:", historial.toJSON());

    res.json({ mensaje: 'Datos recibidos y guardados correctamente' });
  } catch (err) {
    console.error("❌ Error en /api/agente:", err);
    res.status(500).json({ error: 'Error al procesar datos del agente' });
  }
});

module.exports = router;
*/




/*


const express = require('express');
const router = express.Router();

// Importar modelos
const Empleados = require('../models/Empleados');
const Dispositivo = require('../models/Dispositivo');
const DireccionIP = require('../models/DireccionIP');
const Historial = require('../models/Historial');

router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    console.log("📥 Petición recibida en /api/agente");
    console.log("➡️ Payload recibido:", datos);

    // Insertar empleado
    const empleado = await Empleados.create({
      nombre: datos.usuario || 'SIN-USUARIO',
      puesto: 'Usuario Local',
      departamento: datos.sistemaOperativo || 'SIN-SO'
    });
    console.log("✅ Empleado insertado:", empleado.toJSON());

    // Insertar dispositivo con todos los campos
    const dispositivo = await Dispositivo.create({
      hostname: datos.hostname || os.hostname(), // si el agente envía hostname, usarlo
      tipo: datos.tipo || 'PC',
      fabricante: datos.fabricante || 'Desconocido',
      modelo: datos.cpu || 'Desconocido',
      numero_serie: datos.serial?.trim() || 'SIN-SERIAL',
      estado: 'Activo', // valor por defecto
      empleado_id: empleado.empleado_id, // relación con el empleado creado
      fecha_asignacion: new Date(), // fecha actual
      descripcion: `Equipo reportado por agente (${datos.sistemaOperativo})`,
      acciones: 'Registro automático'
    });
    console.log("✅ Dispositivo insertado:", dispositivo.toJSON());

    // Insertar IP
    const ipData = datos.redes?.Ethernet?.[0] || {};
    const ip = await DireccionIP.create({
      direccion: ipData.address || 'Desconocida',
      mac: ipData.mac || 'Desconocida',
      dispositivo_id: dispositivo.dispositivo_id
    });
    console.log("🌐 IP insertada:", ip.toJSON());

    // Insertar historial
    const historial = await Historial.create({
      entidad: 'Dispositivo',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'REPORTE',
      descripcion: `Agente reportó datos del equipo ${dispositivo.hostname}`,
      usuario: empleado.nombre
    });
    console.log("📘 Historial registrado:", historial.toJSON());

    res.json({ mensaje: 'Datos recibidos y guardados correctamente' });
  } catch (err) {
    console.error("❌ Error en /api/agente:", err);
    res.status(500).json({ error: 'Error al procesar datos del agente' });
  }
});

module.exports = router;

*/















/*
const express = require('express');
const router = express.Router();

// Importar modelos
const Empleados = require('../models/Empleados');
const Dispositivo = require('../models/Dispositivo');
const DireccionIP = require('../models/DireccionIP');
const Historial = require('../models/Historial');

router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    console.log("📥 Petición recibida en /api/agente");
    console.log("➡️ Payload recibido:", datos);

    // Insertar empleado
    const empleado = await Empleados.create({
      nombre: datos.usuario || 'SIN-USUARIO',
      puesto: 'Usuario Local',
      departamento: datos.sistemaOperativo || 'SIN-SO'
    });
    console.log("✅ Empleado insertado:", empleado.toJSON());

    // Insertar dispositivo con todos los campos
    const dispositivo = await Dispositivo.create({
      hostname: datos.hostname || 'SIN-HOSTNAME',
      tipo: datos.tipo || 'PC',
      fabricante: datos.fabricante || 'Desconocido',
      modelo: datos.modelo || 'Desconocido',
      numero_serie: datos.numero_serie?.trim() || 'SIN-SERIAL',
      estado: datos.estado || 'Activo',
      empleado_id: empleado.empleado_id, // relación con el empleado creado
      fecha_asignacion: datos.fecha_asignacion || new Date(),
      descripcion: datos.descripcion || `Equipo reportado por agente (${datos.sistemaOperativo})`,
      acciones: datos.acciones || 'Registro automático'
    });
    console.log("✅ Dispositivo insertado:", dispositivo.toJSON());

    // Insertar IP (si viene en el payload)
    const ipData = datos.redes?.Ethernet?.[0] || {};
    const ip = await DireccionIP.create({
      direccion: ipData.address || 'Desconocida',
      mac: ipData.mac || 'Desconocida',
      dispositivo_id: dispositivo.dispositivo_id
    });
    console.log("🌐 IP insertada:", ip.toJSON());

    // Insertar historial
    const historial = await Historial.create({
      entidad: 'Dispositivo',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'REPORTE',
      descripcion: `Agente reportó datos del equipo ${dispositivo.hostname}`,
      usuario: empleado.nombre
    });
    console.log("📘 Historial registrado:", historial.toJSON());

    res.json({ mensaje: 'Datos recibidos y guardados correctamente' });
  } catch (err) {
    console.error("❌ Error en /api/agente:", err);
    res.status(500).json({ error: 'Error al procesar datos del agente' });
  }
});

module.exports = router;

*/










/*

const express = require('express');
const router = express.Router();

// Importar modelos
const Empleados = require('../models/Empleados');
const Dispositivo = require('../models/Dispositivo');
const DireccionIP = require('../models/DireccionIP');
const Historial = require('../models/Historial');
const InventarioSoftware = require('../models/InventarioSoftware'); // 👈 nuevo modelo

router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    console.log("📥 Petición recibida en /api/agente");
    console.log("➡️ Payload recibido:", datos);

    // Insertar empleado
    const empleado = await Empleados.create({
      nombre: datos.usuario || 'SIN-USUARIO',
      puesto: 'Usuario Local',
      departamento: datos.sistemaOperativo || 'SIN-SO'
    });
    console.log("✅ Empleado insertado:", empleado.toJSON());

    // Insertar dispositivo con todos los campos
    const dispositivo = await Dispositivo.create({
      hostname: datos.hostname || 'SIN-HOSTNAME',
      tipo: datos.tipo || 'PC',
      fabricante: datos.fabricante || 'Desconocido',
      modelo: datos.modelo || datos.cpu || 'Desconocido', // 👈 usa CPU si no hay modelo
      //numero_serie: datos.serial?.trim() || 'SIN-SERIAL',
      numero_serie: datos.numero_serie?.trim() || 'SIN-SERIAL',
      estado: datos.estado || 'Activo',
      empleado_id: empleado.empleado_id, // relación con el empleado creado
      fecha_asignacion: datos.fecha_asignacion || new Date(),
      descripcion: datos.descripcion || `Equipo reportado por agente (${datos.sistemaOperativo})`,
      acciones: datos.acciones || 'Registro automático'
    });
    console.log("✅ Dispositivo insertado:", dispositivo.toJSON());

    // Insertar IP (si viene en el payload)
    const ipData = datos.redes?.Ethernet?.[0] || {};
    const ip = await DireccionIP.create({
      direccion: ipData.address || 'Desconocida',
      mac: ipData.mac || 'Desconocida',
      dispositivo_id: dispositivo.dispositivo_id
    });
    console.log("🌐 IP insertada:", ip.toJSON());

    // Insertar programas (si vienen en el payload)
    if (datos.programas && Array.isArray(datos.programas)) {
      for (const prog of datos.programas) {
        await InventarioSoftware.create({
          nombre: prog.nombre || 'SIN-NOMBRE',
          version: prog.version || 'SIN-VERSION',
          dispositivo_id: dispositivo.dispositivo_id
        });
      }
      console.log(`📦 ${datos.programas.length} programas insertados en inventario_software`);
    }

    // Insertar historial
    const historial = await Historial.create({
      entidad: 'Dispositivo',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'REPORTE',
      descripcion: `Agente reportó datos del equipo ${dispositivo.hostname}`,
      usuario: empleado.nombre
    });
    console.log("📘 Historial registrado:", historial.toJSON());

    res.json({ mensaje: 'Datos recibidos y guardados correctamente' });
  } catch (err) {
    console.error("❌ Error en /api/agente:", err);
    res.status(500).json({ error: 'Error al procesar datos del agente' });
  }
});

module.exports = router;



/*
const express = require('express');
const router = express.Router();

// Importar modelos
const Empleados = require('../models/Empleados');
const Dispositivo = require('../models/Dispositivo');
const DireccionIP = require('../models/DireccionIP');
const Historial = require('../models/Historial');
const Licencias = require('../models/Licencia');       // 👈 nuevo modelo
const Capacidades = require('../models/Capacidades');   // 👈 nuevo modelo

router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    console.log("📥 Petición recibida en /api/agente");
    console.log("➡️ Payload recibido:", datos);

    // Insertar empleado
    const empleado = await Empleados.create({
      nombre: datos.usuario || 'SIN-USUARIO',
      puesto: 'Usuario Local',
      departamento: datos.sistemaOperativo || 'SIN-SO'
    });
    console.log("✅ Empleado insertado:", empleado.toJSON());

    // Insertar dispositivo
    const dispositivo = await Dispositivo.create({
      hostname: datos.hostname || 'SIN-HOSTNAME',
      fabricante: datos.fabricante || 'Desconocido',
      modelo: datos.modelo || 'Desconocido',
      numero_serie: datos.serial?.trim() || 'SIN-SERIAL',
      estado: datos.estado || 'Activo',
      empleado_id: empleado.empleado_id,
      fecha_asignacion: datos.fecha_asignacion || new Date(),
      descripcion: datos.descripcion || `Equipo reportado por agente (${datos.sistemaOperativo})`,
      acciones: datos.acciones || 'Registro automático'
    });
    console.log("✅ Dispositivo insertado:", dispositivo.toJSON());

    // Insertar IP
    const ipData = datos.redes?.Ethernet?.[0] || {};
    const ip = await DireccionIP.create({
      direccion: ipData.address || 'Desconocida',
      mac: ipData.mac || 'Desconocida',
      dispositivo_id: dispositivo.dispositivo_id
    });
    console.log("🌐 IP insertada:", ip.toJSON());

    // Insertar licencias
    if (datos.licencias && Array.isArray(datos.licencias)) {
      for (const lic of datos.licencias) {
        await Licencias.create({
          nombre_software: lic.nombre_software || 'SIN-NOMBRE',
          clave: lic.clave || 'SIN-CLAVE',
          dispositivo_id: dispositivo.dispositivo_id
        });
      }
      console.log(`🔑 ${datos.licencias.length} licencias insertadas`);
    }

    // Insertar capacidades
    if (datos.capacidades) {
      await Capacidades.create({
        memoria: datos.capacidades.memoria || 'SIN-MEMORIA',
        disco_duro: datos.capacidades.disco_duro || 'SIN-DISCO',
        tarjeta_grafica: datos.capacidades.tarjeta_grafica || 'SIN-GPU',
        procesador: datos.capacidades.procesador || 'SIN-CPU',
        dispositivo_id: dispositivo.dispositivo_id
      });
      console.log("⚙️ Capacidades insertadas");
    }

    // Insertar historial
    const historial = await Historial.create({
      entidad: 'Dispositivo',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'REPORTE',
      descripcion: `Agente reportó datos del equipo ${dispositivo.hostname}`,
      usuario: empleado.nombre
    });
    console.log("📘 Historial registrado:", historial.toJSON());

    res.json({ mensaje: 'Datos recibidos y guardados correctamente' });
  } catch (err) {
    console.error("❌ Error en /api/agente:", err);
    res.status(500).json({ error: 'Error al procesar datos del agente' });
  }
});

module.exports = router;

*/



/*



const express = require('express');
const router = express.Router();

// Importar modelos
const Empleados = require('../models/Empleados');
const Dispositivo = require('../models/Dispositivo');
const DireccionIP = require('../models/DireccionIP');
const Historial = require('../models/Historial');
const InventarioSoftware = require('../models/InventarioSoftware'); // 👈 nuevo modelo

router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    console.log("📥 Petición recibida en /api/agente");
    console.log("➡️ Payload recibido:", datos);

    // Insertar empleado
    const empleado = await Empleados.create({
      nombre: datos.usuario || 'SIN-USUARIO',
      puesto: 'Usuario Local',
      departamento: datos.sistemaOperativo || 'SIN-SO'
    });
    console.log("✅ Empleado insertado:", empleado.toJSON());

    // Insertar dispositivo con todos los campos
    const dispositivo = await Dispositivo.create({
      hostname: datos.hostname || 'SIN-HOSTNAME',
      tipo: datos.tipo || 'PC', // 👈 ahora se guarda Laptop o Desktop
      fabricante: datos.fabricante || 'Desconocido',
      modelo: datos.modelo || datos.cpu || 'Desconocido',
      numero_serie: datos.numero_serie?.trim() || 'SIN-SERIAL',
      estado: datos.estado || 'Activo',
      empleado_id: empleado.empleado_id, // relación con el empleado creado
      fecha_asignacion: datos.fecha_asignacion || new Date(),
      descripcion: datos.descripcion || `Equipo reportado por agente (${datos.sistemaOperativo})`,
      acciones: datos.acciones || 'Registro automático'
    });
    console.log("✅ Dispositivo insertado:", dispositivo.toJSON());

    // Insertar IP (si viene en el payload)
    const ipData = datos.redes?.Ethernet?.[0] || {};
    const ip = await DireccionIP.create({
      direccion: ipData.address || 'Desconocida',
      mac: ipData.mac || 'Desconocida',
      dispositivo_id: dispositivo.dispositivo_id
    });
    console.log("🌐 IP insertada:", ip.toJSON());

    // Insertar programas (si vienen en el payload)
    if (datos.programas && Array.isArray(datos.programas)) {
      for (const prog of datos.programas) {
        await InventarioSoftware.create({
          nombre: prog.nombre || 'SIN-NOMBRE',
          version: prog.version || 'SIN-VERSION',
          dispositivo_id: dispositivo.dispositivo_id
        });
      }
      console.log(`📦 ${datos.programas.length} programas insertados en inventario_software`);
    }

    // Insertar historial
    const historial = await Historial.create({
      entidad: 'Dispositivo',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'REPORTE',
      descripcion: `Agente reportó datos del equipo ${dispositivo.hostname}`,
      usuario: empleado.nombre
    });
    console.log("📘 Historial registrado:", historial.toJSON());

    res.json({ mensaje: 'Datos recibidos y guardados correctamente' });
  } catch (err) {
    console.error("❌ Error en /api/agente:", err);
    res.status(500).json({ error: 'Error al procesar datos del agente' });
  }
});

module.exports = router;







const express = require('express');
const router = express.Router();

// Importar modelos
const Capacidades = require('../models/Capacidades'); // 👈 nuevo modelo
const Empleados = require('../models/Empleados');
const Dispositivo = require('../models/Dispositivo');
const DireccionIP = require('../models/DireccionIP');
const Historial = require('../models/Historial');
const InventarioSoftware = require('../models/InventarioSoftware'); // 👈 nuevo modelo

router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    console.log("📥 Petición recibida en /api/agente");
    console.log("➡️ Payload recibido:", datos);

    // Insertar empleado
    const empleado = await Empleados.create({
      nombre: datos.usuario || 'SIN-USUARIO',
      puesto: 'Usuario Local',
      departamento: datos.sistemaOperativo || 'SIN-SO'
    });
    console.log("✅ Empleado insertado:", empleado.toJSON());








// 3️⃣ Crear licencias asociadas
if (payload.licencias && payload.licencias.length > 0) {
  for (const lic of payload.licencias) {
    const nuevaLicencia = await Licencia.create({
      software: lic.nombre_software,
      version: lic.version || 'N/A',
      clave_cuenta: lic.clave,
      fecha_inicio: new Date(),
      fecha_expiracion: null,
      dispositivo_id: nuevoDispositivo.dispositivo_id,
      empleado_id: null
    });

    await Historial.create({
      entidad: 'licencias',
      entidad_id: nuevaLicencia.licencia_id,
      accion: 'CREAR',
      descripcion: `Se creó la licencia ${nuevaLicencia.software} (${nuevaLicencia.version}) con clave/cuenta ${nuevaLicencia.clave_cuenta} para el dispositivo ${nuevoDispositivo.hostname}`,
      usuario: 'agente'
    });
  }
}














    // Insertar dispositivo con todos los campos
    const dispositivo = await Dispositivo.create({
      hostname: datos.hostname || 'SIN-HOSTNAME',
      tipo: datos.tipo || 'PC', // 👈 ahora se guarda Laptop o Desktop
      fabricante: datos.fabricante || 'Desconocido',
      modelo: datos.modelo || datos.cpu || 'Desconocido',
      numero_serie: datos.numero_serie?.trim() || 'SIN-SERIAL',
      estado: datos.estado || 'Activo',
      empleado_id: empleado.empleado_id, // relación con el empleado creado
      fecha_asignacion: datos.fecha_asignacion || new Date(),
      descripcion: datos.descripcion || `Equipo reportado por agente (${datos.sistemaOperativo})`,
      acciones: datos.acciones || 'Registro automático'
    });
    console.log("✅ Dispositivo insertado:", dispositivo.toJSON());


    // Insertar capacidades (si vienen en el payload)
if (datos.capacidades) {
  const capacidades = await Capacidades.create({
    memoria: datos.capacidades.memoria || 'SIN-MEMORIA',
    disco_duro: datos.capacidades.disco_duro || 'SIN-DISCO',
    tarjeta_grafica: datos.capacidades.tarjeta_grafica || 'SIN-GPU',
    procesador: datos.capacidades.procesador || 'SIN-CPU',
    dispositivo_id: dispositivo.dispositivo_id
  });
  console.log("⚙️ Capacidades insertadas:", capacidades.toJSON());
}







    // Insertar IP (si viene en el payload)
    const ipData = datos.redes?.Ethernet?.[0] || {};
    const ip = await DireccionIP.create({
      direccion: ipData.address || 'Desconocida',
      mac: ipData.mac || 'Desconocida',
      dispositivo_id: dispositivo.dispositivo_id
    });
    console.log("🌐 IP insertada:", ip.toJSON());

    // Insertar programas (si vienen en el payload)
    if (datos.programas && Array.isArray(datos.programas)) {
      for (const prog of datos.programas) {
        await InventarioSoftware.create({
          nombre: prog.nombre || 'SIN-NOMBRE',
          version: prog.version || 'SIN-VERSION',
          dispositivo_id: dispositivo.dispositivo_id
        });
      }
      console.log(`📦 ${datos.programas.length} programas insertados en inventario_software`);
    }

    // Insertar historial
    const historial = await Historial.create({
      entidad: 'Dispositivo',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'REPORTE',
      descripcion: `Agente reportó datos del equipo ${dispositivo.hostname}`,
      usuario: empleado.nombre
    });
    console.log("📘 Historial registrado:", historial.toJSON());

    res.json({ mensaje: 'Datos recibidos y guardados correctamente' });
  } catch (err) {
    console.error("❌ Error en /api/agente:", err);
    res.status(500).json({ error: 'Error al procesar datos del agente' });
  }
});

module.exports = router;






const express = require('express');
const router = express.Router();
const Dispositivo = require('../models/Dispositivo');
const Capacidad = require('../models/Capacidades');
const Licencia = require('../models/Licencia');
const Historial = require('../models/Historial');

router.post('/', async (req, res) => {
  try {
    const payload = req.body;

    // 1️⃣ Crear el dispositivo
    const nuevoDispositivo = await Dispositivo.create({
      hostname: payload.hostname,
      tipo: payload.tipo,
      fabricante: payload.fabricante,
      modelo: payload.modelo,
      numero_serie: payload.numero_serie,
      estado: 'Activo',
      descripcion: 'Registrado automáticamente por agente'
    });

    // 2️⃣ Crear capacidades asociadas
    if (payload.capacidades) {
      const nuevaCapacidad = await Capacidad.create({
        memoria: payload.capacidades.memoria,
        disco_duro: payload.capacidades.disco_duro,
        tarjeta_grafica: payload.capacidades.tarjeta_grafica,
        procesador: payload.capacidades.procesador,
        dispositivo_id: nuevoDispositivo.dispositivo_id
      });

      await Historial.create({
        entidad: 'capacidades',
        entidad_id: nuevaCapacidad.capacidad_id,
        accion: 'CREAR',
        descripcion: `Se creó la capacidad (RAM: ${nuevaCapacidad.memoria}, Disco: ${nuevaCapacidad.disco_duro}, GPU: ${nuevaCapacidad.tarjeta_grafica}, CPU: ${nuevaCapacidad.procesador}) para el dispositivo ${nuevoDispositivo.hostname}`,
        usuario: 'agente'
      });
    }

    // 3️⃣ Crear licencias asociadas
    if (payload.licencias && payload.licencias.length > 0) {
      for (const lic of payload.licencias) {
        const nuevaLicencia = await Licencia.create({
          software: lic.nombre_software,
          version: lic.version || 'N/A',
          clave_cuenta: lic.clave,
          fecha_inicio: new Date(),
          fecha_expiracion: null,
          dispositivo_id: nuevoDispositivo.dispositivo_id,
          empleado_id: null
        });

        await Historial.create({
          entidad: 'licencias',
          entidad_id: nuevaLicencia.licencia_id,
          accion: 'CREAR',
          descripcion: `Se creó la licencia ${nuevaLicencia.software} (${nuevaLicencia.version}) con clave/cuenta ${nuevaLicencia.clave_cuenta} para el dispositivo ${nuevoDispositivo.hostname}`,
          usuario: 'agente'
        });
      }
    }

    res.status(201).json({ mensaje: 'Dispositivo, capacidades y licencias registradas correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar datos desde el agente' });
  }
});

module.exports = router;










const express = require('express');
const router = express.Router();

// Importar modelos
const Capacidades = require('../models/Capacidades');
const Empleados = require('../models/Empleados');
const Dispositivo = require('../models/Dispositivo');
const DireccionIP = require('../models/DireccionIP');
const Historial = require('../models/Historial');
const InventarioSoftware = require('../models/InventarioSoftware');
const Licencia = require('../models/Licencia'); // 👈 faltaba importar

router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    console.log("📥 Petición recibida en /api/agente");
    console.log("➡️ Payload recibido:", datos);

    // 1️⃣ Insertar empleado
    const empleado = await Empleados.create({
      nombre: datos.usuario || 'SIN-USUARIO',
      puesto: 'Usuario Local',
      departamento: datos.sistemaOperativo || 'SIN-SO'
    });
    console.log("✅ Empleado insertado:", empleado.toJSON());

    // 2️⃣ Insertar dispositivo
    const dispositivo = await Dispositivo.create({
      hostname: datos.hostname || 'SIN-HOSTNAME',
      tipo: datos.tipo || 'PC',
      fabricante: datos.fabricante || 'Desconocido',
      modelo: datos.modelo || datos.cpu || 'Desconocido',
      numero_serie: datos.numero_serie?.trim() || 'SIN-SERIAL',
      estado: datos.estado || 'Activo',
      empleado_id: empleado.empleado_id,
      fecha_asignacion: datos.fecha_asignacion || new Date(),
      descripcion: datos.descripcion || `Equipo reportado por agente (${datos.sistemaOperativo})`,
      acciones: datos.acciones || 'Registro automático'
    });
    console.log("✅ Dispositivo insertado:", dispositivo.toJSON());

    // 3️⃣ Insertar capacidades
    if (datos.capacidades) {
      const capacidades = await Capacidades.create({
        memoria: datos.capacidades.memoria || 'SIN-MEMORIA',
        disco_duro: datos.capacidades.disco_duro || 'SIN-DISCO',
        tarjeta_grafica: datos.capacidades.tarjeta_grafica || 'SIN-GPU',
        procesador: datos.capacidades.procesador || 'SIN-CPU',
        dispositivo_id: dispositivo.dispositivo_id
      });
      console.log("⚙️ Capacidades insertadas:", capacidades.toJSON());
    }

    // 4️⃣ Insertar licencias
    // 4️⃣ Insertar licencias
if (datos.licencias && Array.isArray(datos.licencias)) {
  for (const lic of datos.licencias) {
    const nuevaLicencia = await Licencia.create({
      nombre_software: lic.nombre_software || 'SIN-NOMBRE',
      version: lic.version || 'N/A',
      clave: lic.clave || 'SIN-CLAVE',
      fecha_expiracion: null,
      dispositivo_id: dispositivo.dispositivo_id
    });

    await Historial.create({
      entidad: 'licencias',
      entidad_id: nuevaLicencia.licencia_id,
      accion: 'CREAR',
      descripcion: `Se creó la licencia ${nuevaLicencia.nombre_software} (${nuevaLicencia.version}) con clave ${nuevaLicencia.clave} para el dispositivo ${dispositivo.hostname}`,
      usuario: 'agente'
    });
  }
  console.log(`🔑 ${datos.licencias.length} licencias insertadas en la tabla licencias`);
}

    // 5️⃣ Insertar IP
    // 4️⃣ Insertar licencias
if (datos.licencias && Array.isArray(datos.licencias)) {
  for (const lic of datos.licencias) {
    const nuevaLicencia = await Licencia.create({
      nombre_software: lic.nombre_software || 'SIN-NOMBRE',
      version: lic.version || 'N/A',
      clave: lic.clave || 'SIN-CLAVE',
      fecha_expiracion: null,
      dispositivo_id: dispositivo.dispositivo_id
    });

    await Historial.create({
      entidad: 'licencias',
      entidad_id: nuevaLicencia.licencia_id,
      accion: 'CREAR',
      descripcion: `Se creó la licencia ${nuevaLicencia.nombre_software} (${nuevaLicencia.version}) con clave ${nuevaLicencia.clave} para el dispositivo ${dispositivo.hostname}`,
      usuario: 'agente'
    });
  }
  console.log(`🔑 ${datos.licencias.length} licencias insertadas en la tabla licencias`);
}

    // 7️⃣ Insertar historial general
    const historial = await Historial.create({
      entidad: 'Dispositivo',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'REPORTE',
      descripcion: `Agente reportó datos del equipo ${dispositivo.hostname}`,
      usuario: empleado.nombre
    });
    console.log("📘 Historial registrado:", historial.toJSON());

    res.json({ mensaje: 'Datos recibidos y guardados correctamente' });
  } catch (err) {
    console.error("❌ Error en /api/agente:", err);
    res.status(500).json({ error: 'Error al procesar datos del agente' });
  }
});

module.exports = router;

*/


/*

const express = require('express');
const router = express.Router();

// Importar modelos
const Capacidades = require('../models/Capacidades');
const Empleados = require('../models/Empleados');
const Dispositivo = require('../models/Dispositivo');
const DireccionIP = require('../models/DireccionIP');
const Historial = require('../models/Historial');
const InventarioSoftware = require('../models/InventarioSoftware');
const Licencia = require('../models/Licencia'); // 👈 modelo corregido

router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    console.log("📥 Petición recibida en /api/agente");
    console.log("➡️ Payload recibido:", datos);

    // 1️⃣ Insertar empleado
    const empleado = await Empleados.create({
      nombre: datos.usuario || 'SIN-USUARIO',
      puesto: 'Usuario Local',
      departamento: datos.sistemaOperativo || 'SIN-SO'
    });
    console.log("✅ Empleado insertado:", empleado.toJSON());

    // 2️⃣ Insertar dispositivo
    const dispositivo = await Dispositivo.create({
      hostname: datos.hostname || 'SIN-HOSTNAME',
      tipo: datos.tipo || 'PC',
      fabricante: datos.fabricante || 'Desconocido',
      modelo: datos.modelo || datos.cpu || 'Desconocido',
      numero_serie: datos.numero_serie?.trim() || 'SIN-SERIAL',
      estado: datos.estado || 'Activo',
      empleado_id: empleado.empleado_id,
      fecha_asignacion: datos.fecha_asignacion || new Date(),
      descripcion: datos.descripcion || `Equipo reportado por agente (${datos.sistemaOperativo})`,
      acciones: datos.acciones || 'Registro automático'
    });
    console.log("✅ Dispositivo insertado:", dispositivo.toJSON());

    // 3️⃣ Insertar capacidades
    if (datos.capacidades) {
      const capacidades = await Capacidades.create({
        memoria: datos.capacidades.memoria || 'SIN-MEMORIA',
        disco_duro: datos.capacidades.disco_duro || 'SIN-DISCO',
        tarjeta_grafica: datos.capacidades.tarjeta_grafica || 'SIN-GPU',
        procesador: datos.capacidades.procesador || 'SIN-CPU',
        dispositivo_id: dispositivo.dispositivo_id
      });
      console.log("⚙️ Capacidades insertadas:", capacidades.toJSON());
    }

    // 4️⃣ Insertar licencias evitando duplicados
    if (datos.licencias && Array.isArray(datos.licencias)) {
      for (const lic of datos.licencias) {
        const [nuevaLicencia, created] = await Licencia.findOrCreate({
          where: {
            nombre_software: lic.nombre_software,
            clave: lic.clave,
            dispositivo_id: dispositivo.dispositivo_id
          },
          defaults: {
            version: lic.version || 'N/A',
            fecha_expiracion: null
          }
        });

        if (created) {
          await Historial.create({
            entidad: 'licencias',
            entidad_id: nuevaLicencia.licencia_id,
            accion: 'CREAR',
            descripcion: `Se creó la licencia ${nuevaLicencia.nombre_software} (${nuevaLicencia.version}) con clave ${nuevaLicencia.clave} para el dispositivo ${dispositivo.hostname}`,
            usuario: 'agente'
          });
        }
      }
      console.log(`🔑 Licencias procesadas: ${datos.licencias.length} (nuevas solo si no existían)`);
    }

    // 5️⃣ Insertar IP
    const ipData = datos.redes?.Ethernet?.[0] || {};
    const ip = await DireccionIP.create({
      direccion: ipData.address || 'Desconocida',
      mac: ipData.mac || 'Desconocida',
      dispositivo_id: dispositivo.dispositivo_id
    });
    console.log("🌐 IP insertada:", ip.toJSON());

    // 6️⃣ Insertar programas
    if (datos.programas && Array.isArray(datos.programas)) {
      for (const prog of datos.programas) {
        await InventarioSoftware.create({
          nombre: prog.nombre || 'SIN-NOMBRE',
          version: prog.version || 'SIN-VERSION',
          dispositivo_id: dispositivo.dispositivo_id
        });
      }
      console.log(`📦 ${datos.programas.length} programas insertados en inventario_software`);
    }

    // 7️⃣ Insertar historial general
    const historial = await Historial.create({
      entidad: 'Dispositivo',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'REPORTE',
      descripcion: `Agente reportó datos del equipo ${dispositivo.hostname}`,
      usuario: empleado.nombre
    });
    console.log("📘 Historial registrado:", historial.toJSON());

    res.json({ mensaje: 'Datos recibidos y guardados correctamente' });
  } catch (err) {
    console.error("❌ Error en /api/agente:", err);
    res.status(500).json({ error: 'Error al procesar datos del agente' });
  }
});

module.exports = router;
*/





/*
// TODO BIEN HASTA AHI
const express = require('express');
const router = express.Router();

// Importar modelos
const Capacidades = require('../models/Capacidades');
const Empleados = require('../models/Empleados');
const Dispositivo = require('../models/Dispositivo');
const DireccionIP = require('../models/DireccionIP');
const Historial = require('../models/Historial');
const InventarioSoftware = require('../models/InventarioSoftware');
const Licencia = require('../models/Licencia'); // 👈 modelo corregido

router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    console.log("📥 Petición recibida en /api/agente");

    // 📂 DEPURACIÓN: imprimir todos los valores recibidos
    console.log("===== DEPURACIÓN DE PAYLOAD =====");
    console.log("Usuario:", datos.usuario);
    console.log("Hostname:", datos.hostname);
    console.log("Sistema Operativo:", datos.sistemaOperativo);
    console.log("Fabricante:", datos.fabricante);
    console.log("Modelo:", datos.modelo);
    console.log("Serial:", datos.numero_serie);
    console.log("Tipo:", datos.tipo);
    console.log("Capacidades:", datos.capacidades);
    console.log("Licencias:", datos.licencias);
    console.log("Redes:", datos.redes);
    console.log("Programas:", datos.programas);
    console.log("=================================");
    console.log("➡️ Payload recibido:", datos);

    // 1️⃣ Insertar empleado
    const empleado = await Empleados.create({
      nombre: datos.usuario || 'SIN-USUARIO',
      puesto: 'Usuario Local',
      departamento: datos.sistemaOperativo || 'SIN-SO'
    });
    console.log("✅ Empleado insertado:", empleado.toJSON());

    // 2️⃣ Insertar dispositivo
    const dispositivo = await Dispositivo.create({
      hostname: datos.hostname || 'SIN-HOSTNAME',
      tipo: datos.tipo || 'PC',
      fabricante: datos.fabricante || 'Desconocido',
      modelo: datos.modelo || datos.cpu || 'Desconocido',
      numero_serie: datos.numero_serie?.trim() || 'SIN-SERIAL',
      estado: datos.estado || 'Activo',
      empleado_id: empleado.empleado_id,
      fecha_asignacion: datos.fecha_asignacion || new Date(),
      descripcion: datos.descripcion || `Equipo reportado por agente (${datos.sistemaOperativo})`,
      acciones: datos.acciones || 'Registro automático'
    });
    console.log("✅ Dispositivo insertado:", dispositivo.toJSON());

    // 3️⃣ Insertar capacidades
    if (datos.capacidades) {
      const capacidades = await Capacidades.create({
        memoria: datos.capacidades.memoria || 'SIN-MEMORIA',
        disco_duro: datos.capacidades.disco_duro || 'SIN-DISCO',
        tarjeta_grafica: datos.capacidades.tarjeta_grafica || 'SIN-GPU',
        procesador: datos.capacidades.procesador || 'SIN-CPU',
        dispositivo_id: dispositivo.dispositivo_id
      });
      console.log("⚙️ Capacidades insertadas:", capacidades.toJSON());
    }

    // 4️⃣ Insertar licencias evitando duplicados
    if (datos.licencias && Array.isArray(datos.licencias)) {
      for (const lic of datos.licencias) {
        const [nuevaLicencia, created] = await Licencia.findOrCreate({
          where: {
            nombre_software: lic.nombre_software,
            clave: lic.clave,
            dispositivo_id: dispositivo.dispositivo_id
          },
          defaults: {
            version: lic.version || 'N/A',
            fecha_expiracion: null
          }
        });

        if (created) {
          await Historial.create({
            entidad: 'licencias',
            entidad_id: nuevaLicencia.licencia_id,
            accion: 'CREAR',
            descripcion: `Se creó la licencia ${nuevaLicencia.nombre_software} (${nuevaLicencia.version}) con clave ${nuevaLicencia.clave} para el dispositivo ${dispositivo.hostname}`,
            usuario: 'agente'
          });
        }
      }
      console.log(`🔑 Licencias procesadas: ${datos.licencias.length} (nuevas solo si no existían)`);
    }

    // 5️⃣ Insertar IP
    const ipData = datos.redes?.Ethernet?.[0] || {};
    const ip = await DireccionIP.create({
      direccion: ipData.address || 'Desconocida',
      mac: ipData.mac || 'Desconocida',
      dispositivo_id: dispositivo.dispositivo_id
    });
    console.log("🌐 IP insertada:", ip.toJSON());

    // 6️⃣ Insertar programas
    if (datos.programas && Array.isArray(datos.programas)) {
      for (const prog of datos.programas) {
        await InventarioSoftware.create({
          nombre: prog.nombre || 'SIN-NOMBRE',
          version: prog.version || 'SIN-VERSION',
          dispositivo_id: dispositivo.dispositivo_id
        });
      }
      console.log(`📦 ${datos.programas.length} programas insertados en inventario_software`);
    }

    // 7️⃣ Insertar historial general
    const historial = await Historial.create({
      entidad: 'Dispositivo',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'REPORTE',
      descripcion: `Agente reportó datos del equipo ${dispositivo.hostname}`,
      usuario: empleado.nombre
    });
    console.log("📘 Historial registrado:", historial.toJSON());

    res.json({ mensaje: 'Datos recibidos y guardados correctamente' });
  } catch (err) {
    console.error("❌ Error en /api/agente:", err);
    res.status(500).json({ error: 'Error al procesar datos del agente' });
  }
});

module.exports = router;
*/


const express = require('express');
const router = express.Router();

// Importar modelos
const Capacidades = require('../models/Capacidades');
const Empleados = require('../models/Empleados');
const Dispositivo = require('../models/Dispositivo');
const DireccionIP = require('../models/DireccionIP');
const Historial = require('../models/Historial');
const InventarioSoftware = require('../models/InventarioSoftware');
const Licencia = require('../models/Licencia'); // 👈 modelo corregido

router.post('/', async (req, res) => {
  try {
    const datos = req.body;
    console.log("📥 Petición recibida en /api/agente");

    // 📂 DEPURACIÓN: imprimir todos los valores recibidos
    console.log("===== DEPURACIÓN DE PAYLOAD =====");
    console.log("Usuario:", datos.usuario);
    console.log("Hostname:", datos.hostname);
    console.log("Sistema Operativo:", datos.sistemaOperativo);
    console.log("Fabricante:", datos.fabricante);
    console.log("Modelo:", datos.modelo);
    console.log("Serial:", datos.numero_serie);
    console.log("Tipo:", datos.tipo);
    console.log("Capacidades:", datos.capacidades);
    console.log("Licencias:", datos.licencias);
    console.log("Redes:", datos.redes);
    console.log("Programas:", datos.programas);
    console.log("=================================");
    console.log("➡️ Payload recibido:", datos);

    // 1️⃣ Insertar empleado
    const empleado = await Empleados.create({
      nombre: datos.usuario || 'SIN-USUARIO',
      puesto: 'Usuario Local',
      departamento: datos.sistemaOperativo || 'SIN-SO'
    });
    console.log("✅ Empleado insertado:", empleado.toJSON());

    // 2️⃣ Insertar dispositivo
    const dispositivo = await Dispositivo.create({
      hostname: datos.hostname || 'SIN-HOSTNAME',
      tipo: datos.tipo || 'PC',
      fabricante: datos.fabricante || 'Desconocido',
      modelo: datos.modelo || datos.cpu || 'Desconocido',
      numero_serie: datos.numero_serie?.trim() || 'SIN-SERIAL',
      estado: datos.estado || 'Activo',
      empleado_id: empleado.empleado_id,
      fecha_asignacion: datos.fecha_asignacion || new Date(),
      descripcion: datos.descripcion || `Equipo reportado por agente (${datos.sistemaOperativo})`,
      acciones: datos.acciones || 'Registro automático'
    });
    console.log("✅ Dispositivo insertado:", dispositivo.toJSON());

    // 3️⃣ Insertar capacidades
    if (datos.capacidades) {
      const capacidades = await Capacidades.create({
        memoria: datos.capacidades.memoria || 'SIN-MEMORIA',
        disco_duro: datos.capacidades.disco_duro || 'SIN-DISCO',
        tarjeta_grafica: datos.capacidades.tarjeta_grafica || 'SIN-GPU',
        procesador: datos.capacidades.procesador || 'SIN-CPU',
        dispositivo_id: dispositivo.dispositivo_id
      });
      console.log("⚙️ Capacidades insertadas:", capacidades.toJSON());
    }

    // 4️⃣ Insertar licencias evitando duplicados
    if (datos.licencias && Array.isArray(datos.licencias)) {
      for (const lic of datos.licencias) {
        const [nuevaLicencia, created] = await Licencia.findOrCreate({
          where: {
            nombre_software: lic.nombre_software,
            clave: lic.clave,
            dispositivo_id: dispositivo.dispositivo_id
          },
          defaults: {
            version: lic.version || 'N/A',
            fecha_expiracion: null
          }
        });

        if (created) {
          await Historial.create({
            entidad: 'licencias',
            entidad_id: nuevaLicencia.licencia_id,
            accion: 'CREAR',
            descripcion: `Se creó la licencia ${nuevaLicencia.nombre_software} (${nuevaLicencia.version}) con clave ${nuevaLicencia.clave} para el dispositivo ${dispositivo.hostname}`,
            usuario: 'agente'
          });
        }
      }
      console.log(`🔑 Licencias procesadas: ${datos.licencias.length} (nuevas solo si no existían)`);
    }

    // 5️⃣ Insertar IP (solo si hay datos válidos)
    const ipData = datos.redes?.Ethernet?.[0] || {};
    if (ipData.address && ipData.mac) {
      const ip = await DireccionIP.create({
        ip_address: ipData.address,
        mac_address: ipData.mac,
        fecha_asignacion: new Date(),
        dispositivo_id: dispositivo.dispositivo_id
      });
      console.log("🌐 IP insertada:", ip.toJSON());
    } else {
      console.log("⚠️ No se insertó IP porque los datos eran inválidos o vacíos.");
    }

    // 6️⃣ Insertar programas con nuevos campos y evitando duplicados
    if (datos.programas && Array.isArray(datos.programas)) {
      for (const prog of datos.programas) {
        const existe = await InventarioSoftware.findOne({
          where: {
            nombre: prog.nombre,
            version: prog.version,
            dispositivo_id: dispositivo.dispositivo_id
          }
        });

        if (!existe) {
          await InventarioSoftware.create({
            nombre: prog.nombre || 'SIN-NOMBRE',
            version: prog.version || 'SIN-VERSION',
            dispositivo_id: dispositivo.dispositivo_id,
            fabricante: prog.fabricante || 'Desconocido',
            fecha_instalacion: prog.fecha_instalacion || null,
            tamano: prog.tamano || 'SIN-TAMANO'
          });
        }
      }
      console.log(`📦 Programas procesados: ${datos.programas.length} (insertados solo si no existían)`);
    }

    // 7️⃣ Insertar historial general
    const historial = await Historial.create({
      entidad: 'Dispositivo',
      entidad_id: dispositivo.dispositivo_id,
      accion: 'REPORTE',
      descripcion: `Agente reportó datos del equipo ${dispositivo.hostname}`,
      usuario: empleado.nombre
    });
    console.log("📘 Historial registrado:", historial.toJSON());

    // ✅ DEVOLVER dispositivo_id para que el agente pueda usarlo en /api/ips
    res.json({
      mensaje: '✅ Datos recibidos y guardados correctamente',
      dispositivo_id: dispositivo.dispositivo_id
    });
  } catch (err) {
    console.error("❌ Error en /api/agente:", err);
    res.status(500).json({ error: 'Error al procesar datos del agente' });
  }
});

module.exports = router;