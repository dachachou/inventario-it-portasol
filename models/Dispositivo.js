
/*
// models/Dispositivo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Dispositivo = sequelize.define('Dispositivo', {
  hostname: DataTypes.STRING,
  tipo: DataTypes.STRING,
  fabricante: DataTypes.STRING,
  modelo: DataTypes.STRING,
  numero_serie: DataTypes.STRING,
  estado: DataTypes.STRING,
  fecha_asignacion: DataTypes.DATE
});

module.exports = Dispositivo;

*/



//const Empleado = require('./Empleado');
const Empleado = require('../models/Empleados');

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
//const Empleado = require('./Empleados'); // asegúrate de tener este modelo

const Dispositivo = sequelize.define('Dispositivo', {
  dispositivo_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  hostname: DataTypes.STRING,
  tipo: DataTypes.STRING,
  fabricante: DataTypes.STRING,
  modelo: DataTypes.STRING,
  numero_serie: DataTypes.STRING,
  estado: DataTypes.STRING,
  fecha_asignacion: DataTypes.DATE,
  descripcion: DataTypes.STRING   // 👈 nuevo campo agregado
}, {
  tableName: 'dispositivos',
  timestamps: false
});

// Relación con Empleado
Dispositivo.belongsTo(Empleado, { foreignKey: 'empleado_id' });

module.exports = Dispositivo;