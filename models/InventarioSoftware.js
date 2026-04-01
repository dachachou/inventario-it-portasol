

/*

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // 👈 tu conexión a Postgres
const Dispositivo = require('./Dispositivo'); // 👈 relación con dispositivos

const InventarioSoftware = sequelize.define('InventarioSoftware', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  version: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  dispositivo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Dispositivo,
      key: 'dispositivo_id'
    }
  }
}, {
  tableName: 'inventario_software',
  timestamps: false
});

// Relación con Dispositivo
Dispositivo.hasMany(InventarioSoftware, { foreignKey: 'dispositivo_id' });
InventarioSoftware.belongsTo(Dispositivo, { foreignKey: 'dispositivo_id' });

module.exports = InventarioSoftware;*/

// models/InventarioSoftware.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // 👈 Ajusta la ruta según tu proyecto

const InventarioSoftware = sequelize.define('InventarioSoftware', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  version: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  fabricante: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  tamano: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  fecha_instalacion: {
    type: DataTypes.DATE,
    allowNull: true
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  dispositivo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'dispositivos', // 👈 nombre de la tabla en Postgres
      key: 'dispositivo_id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'inventario_software',
  timestamps: false // 👈 ya tenemos fecha_registro, no necesitamos createdAt/updatedAt
});

module.exports = InventarioSoftware;