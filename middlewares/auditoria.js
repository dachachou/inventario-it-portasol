
/*
// middlewares/auditoria.js
const Historial = require('../models/Historial');

async function auditoria(req, res, next) {
  const originalJson = res.json;

  res.json = async function (data) {
    try {
      let accion;
      if (req.method === 'POST') accion = 'CREAR';
      else if (req.method === 'PUT') accion = 'EDITAR';
      else if (req.method === 'DELETE') accion = 'ELIMINAR';

      if (accion) {
        await Historial.create({
          entidad: req.baseUrl.replace('/api/', ''), // ej: 'licencias'
          entidad_id: data?.licencia_id || data?.id || req.params.id || null,
          accion,
          descripcion: `${accion} en ${req.baseUrl}`,
          usuario: req.user?.nombre || 'admin'
        });
      }
    } catch (err) {
      console.error('Error registrando historial:', err);
    }

    return originalJson.call(this, data);
  };

  next();
}

module.exports = auditoria;












const Historial = require('../models/Historial');

async function auditoria(req, res, next) {
  const originalJson = res.json;

  res.json = async function (data) {
    try {
      let accion;
      if (req.method === 'POST') accion = 'CREAR';
      else if (req.method === 'PUT') accion = 'EDITAR';
      else if (req.method === 'DELETE') accion = 'ELIMINAR';

      if (accion) {
        // Detectar correctamente el ID según la entidad
        const entidadId =
          data?.dispositivo_id ||
          data?.licencia_id ||
          data?.empleado_id ||
          data?.ip_id ||
          data?.capacidad_id ||
          data?.id ||
          req.params.id ||
          null;

        // Si no hay data (ej: DELETE devuelve solo mensaje), usamos req.params.id
        const entidadFinalId = entidadId || req.params.id;

        await Historial.create({
          entidad: req.baseUrl.replace('/api/', ''), // ej: 'dispositivos'
          entidad_id: entidadFinalId,
          accion,
          descripcion: `${accion} en ${req.baseUrl}`,
          usuario: req.user?.nombre || 'admin'
        });
      }
    } catch (err) {
      console.error('Error registrando historial:', err);
    }

    return originalJson.call(this, data);
  };

  next();
}

module.exports = auditoria;

*/

const Historial = require('../models/Historial');

async function auditoria(req, res, next) {
  const originalJson = res.json;

  res.json = async function (data) {
    try {
      let accion;
      if (req.method === 'POST') accion = 'CREAR';
      else if (req.method === 'PUT') accion = 'EDITAR';
      else if (req.method === 'DELETE') accion = 'ELIMINAR';

      console.log('👉 Middleware auditoria ejecutado');
      console.log('Método:', req.method);
      console.log('Acción detectada:', accion);
      console.log('Data recibida en res.json:', data);

      if (accion) {
        const entidadId =
          data?.dispositivo_id ||
          data?.licencia_id ||
          data?.empleado_id ||
          data?.ip_id ||
          data?.capacidad_id ||
          data?.id ||
          req.params.id ||
          null;

        console.log('Entidad detectada:', req.baseUrl.replace('/api/', ''));
        console.log('Entidad ID detectado:', entidadId);

        await Historial.create({
          entidad: req.baseUrl.replace('/api/', ''), // ej: 'dispositivos'
          entidad_id: entidadId,
          accion,
          descripcion: `${accion} en ${req.baseUrl}`,
          usuario: 'admin'
        });

        console.log('✅ Registro insertado en historial');
      }
    } catch (err) {
      console.error('❌ Error registrando historial:', err);
    }

    return originalJson.call(this, data);
  };

  next();
}

module.exports = auditoria;