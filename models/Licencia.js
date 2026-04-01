
/*

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Dispositivo = require('./Dispositivo');

const Licencia = sequelize.define('Licencia', {
  licencia_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_software: DataTypes.STRING,
  version: DataTypes.STRING,
  clave: DataTypes.STRING,
  fecha_expiracion: DataTypes.DATE
}, {
  tableName: 'licencias',
  timestamps: false
});

Licencia.belongsTo(Dispositivo, { foreignKey: 'dispositivo_id' });

module.exports = Licencia;









const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Dispositivo = require('./Dispositivo');
const Empleado = require('./Empleados');

const Licencia = sequelize.define('Licencia', {
  licencia_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_software: DataTypes.STRING,
  version: DataTypes.STRING,
  clave: DataTypes.STRING,
  fecha_inicio: DataTypes.DATE,
  fecha_expiracion: DataTypes.DATE,
  dispositivo_id: DataTypes.INTEGER,
  empleado_id: DataTypes.INTEGER
}, {
  tableName: 'licencias',
  timestamps: false
});

// Relaciones
Dispositivo.hasMany(Licencia, { foreignKey: 'dispositivo_id' });
Licencia.belongsTo(Dispositivo, { foreignKey: 'dispositivo_id' });

Empleado.hasMany(Licencia, { foreignKey: 'empleado_id' });
Licencia.belongsTo(Empleado, { foreignKey: 'empleado_id' });

module.exports = Licencia;










const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Dispositivo = require('./Dispositivo');
const Empleado = require('./Empleados'); // 👈 asegúrate que el archivo se llame igual

const Licencia = sequelize.define('Licencia', {
  licencia_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_software: {
    type: DataTypes.STRING,
    allowNull: false
  },
  version: {
    type: DataTypes.STRING,
    allowNull: false
  },
  clave: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fecha_expiracion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dispositivo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Dispositivo,
      key: 'dispositivo_id'
    },
    allowNull: true
  },
  empleado_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Empleado,
      key: 'empleado_id'
    },
    allowNull: true
  }
}, {
  tableName: 'licencias',
  timestamps: false
});

// Relaciones
Dispositivo.hasMany(Licencia, { foreignKey: 'dispositivo_id' });
Licencia.belongsTo(Dispositivo, { foreignKey: 'dispositivo_id' });

Empleado.hasMany(Licencia, { foreignKey: 'empleado_id' });
Licencia.belongsTo(Empleado, { foreignKey: 'empleado_id' });

module.exports = Licencia;












const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Dispositivo = require('./Dispositivo');

const Licencia = sequelize.define('Licencia', {
  licencia_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_software: {
    type: DataTypes.STRING,
    allowNull: false
  },
  version: {
    type: DataTypes.STRING,
    allowNull: true
  },
  clave: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_expiracion: {
    type: DataTypes.DATE,
    allowNull: true
  },
  dispositivo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Dispositivo,
      key: 'dispositivo_id'
    }
  }
}, {
  tableName: 'licencias',
  timestamps: false
});

Licencia.belongsTo(Dispositivo, { foreignKey: 'dispositivo_id' });

module.exports = Licencia;

*/


const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Dispositivo = require('./Dispositivo');

const Licencia = sequelize.define('Licencia', {
  licencia_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_software: {
    type: DataTypes.STRING,
    allowNull: false
  },
  version: {
    type: DataTypes.STRING,
    allowNull: true
  },
  clave: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_expiracion: {
    type: DataTypes.DATE,
    allowNull: true
  },
  dispositivo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Dispositivo,
      key: 'dispositivo_id'
    }
  }
}, {
  tableName: 'licencias',
  timestamps: false
});

Dispositivo.hasMany(Licencia, { foreignKey: 'dispositivo_id' });
Licencia.belongsTo(Dispositivo, { foreignKey: 'dispositivo_id' });

module.exports = Licencia;