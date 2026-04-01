
/*

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Dispositivo = require('./Dispositivo');


const Capacidad = sequelize.define('Capacidad', {
  capacidad_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  memoria: {
    type: DataTypes.STRING
  },
  disco_duro: {
    type: DataTypes.STRING
  },
  tarjeta_grafica: {
    type: DataTypes.STRING
  },
  procesador: {
    type: DataTypes.STRING
  },
  dispositivo_id: {   // FK hacia Dispositivo
    type: DataTypes.INTEGER,
    references: {
      model: Dispositivo,
      key: 'dispositivo_id'
    }
  }
}, {
  tableName: 'capacidades',
  timestamps: false
});

// Relación 1:1 (un dispositivo tiene una capacidad)
Dispositivo.hasOne(Capacidad, { foreignKey: 'dispositivo_id' });
Capacidad.belongsTo(Dispositivo, { foreignKey: 'dispositivo_id' });

module.exports = Capacidad;

*/

/*
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Dispositivo = require('./Dispositivo');

const Capacidad = sequelize.define('Capacidad', {
  capacidad_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  memoria: DataTypes.STRING,
  disco_duro: DataTypes.STRING,
  tarjeta_grafica: DataTypes.STRING,
  procesador: DataTypes.STRING,
  dispositivo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Dispositivo,
      key: 'dispositivo_id'
    }
  }
}, {
  tableName: 'capacidades',
  timestamps: false
});

// Relación con Dispositivo
Dispositivo.hasOne(Capacidad, { foreignKey: 'dispositivo_id' });
Capacidad.belongsTo(Dispositivo, { foreignKey: 'dispositivo_id' });

module.exports = Capacidad;

*/


const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Dispositivo = require('./Dispositivo');

const Capacidad = sequelize.define('Capacidades', {
  capacidad_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  memoria: DataTypes.STRING,
  disco_duro: DataTypes.STRING,
  tarjeta_grafica: DataTypes.STRING,
  procesador: DataTypes.STRING,
  dispositivo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Dispositivo,
      key: 'dispositivo_id'
    }
  }
}, {
  tableName: 'capacidades',
  timestamps: false
});

// Relación con Dispositivo
Dispositivo.hasOne(Capacidad, { foreignKey: 'dispositivo_id' });
Capacidad.belongsTo(Dispositivo, { foreignKey: 'dispositivo_id' });

module.exports = Capacidad;