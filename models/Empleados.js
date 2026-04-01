


const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Empleado = sequelize.define('Empleados', {
  empleado_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  departamento: { type: DataTypes.STRING },
  correo: { type: DataTypes.STRING, unique: true }
}, {
  tableName: 'empleados',
  timestamps: false
});

module.exports = Empleado;