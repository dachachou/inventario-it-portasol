

/*
// models/Historial.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Historial = sequelize.define('Historial', {
  historial_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  entidad: { type: DataTypes.STRING(50), allowNull: false },
  entidad_id: { type: DataTypes.INTEGER, allowNull: false },
  accion: { type: DataTypes.STRING(100), allowNull: false },
  descripcion: { type: DataTypes.TEXT },
  usuario: { type: DataTypes.STRING(100) },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'historial',
  timestamps: false
});

module.exports = Historial;
*/

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Historial = sequelize.define('Historial', {
  historial_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  entidad: { type: DataTypes.STRING, allowNull: false },
  entidad_id: { type: DataTypes.INTEGER, allowNull: false },
  accion: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT, allowNull: false },
  usuario: { type: DataTypes.STRING, allowNull: false },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'historial',
  timestamps: false
});

module.exports = Historial;