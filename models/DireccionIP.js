


const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Dispositivo = require('./Dispositivo');

const DireccionIP = sequelize.define('DireccionIP', {
  ip_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ip_address: { type: DataTypes.STRING, unique: true },
  mac_address: DataTypes.STRING,
  fecha_asignacion: DataTypes.DATE
}, {
  tableName: 'direcciones_ip',
  timestamps: false
});

DireccionIP.belongsTo(Dispositivo, { foreignKey: 'dispositivo_id' });

module.exports = DireccionIP;