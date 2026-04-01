

/*
// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('inventario_db', 'usuario', 'clave', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;

*/

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('inventario_db', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

module.exports = sequelize;