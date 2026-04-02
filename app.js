// app.js

/*
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/dispositivos', require('./routes/dispositivos'));
app.use('/api/licencias', require('./routes/licencias'));
app.use('/api/ips', require('./routes/ips'));
app.use('/api/empleados', require('./routes/empleados'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
*/

/*
// app.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db'); // conexión a la base de datos

const app = express();
app.use(cors());
app.use(express.json());

// Importar rutas
const dispositivosRoutes = require('./routes/dispositivos');
const empleadosRoutes = require('./routes/empleados');
const licenciasRoutes = require('./routes/licencias');
const ipsRoutes = require('./routes/ips');

// Usar rutas
app.use('/api/dispositivos', dispositivosRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/licencias', licenciasRoutes);
app.use('/api/ips', ipsRoutes);

// Probar conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log('✅ Conexión a la base de datos establecida'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Levantar servidor(4000 ERAN 3000)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
*/



/*
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db'); // conexión a la base de datos

const app = express();
app.use(cors());
app.use(express.json());

// Importar rutas
const dispositivosRoutes = require('./routes/dispositivos');
const empleadosRoutes = require('./routes/empleados');
const licenciasRoutes = require('./routes/licencias');
const ipsRoutes = require('./routes/ips');

const capacidadesRoutes = require('./routes/capacidades');


const historialRoutes = require('./routes/historial');



const agenteRoutes = require('./routes/agente');




app.use(express.json()); // <- importante para que req.body funcione






// Usar rutas con prefijo /api
app.use('/api/dispositivos', dispositivosRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/licencias', licenciasRoutes);
app.use('/api/ips', ipsRoutes);
//app.use('/api/agente', agenteRoutes);
app.use('/api/capacidades', capacidadesRoutes);
app.use('/api/historial', historialRoutes);

// Probar conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log('✅ Conexión a la base de datos establecida'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Levantar servidor en puerto 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});

*/


const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db'); // conexión a la base de datos

const app = express();
app.use(cors());
app.use(express.json()); // <- necesario para que req.body funcione


// Ruta raíz para confirmar que el backend está vivo
app.get('/', (req, res) => {
  res.send('✅ Backend Inventario-IT funcionando en Render');
});




// Importar rutas
const dispositivosRoutes = require('./routes/dispositivos');
const empleadosRoutes = require('./routes/empleados');
const licenciasRoutes = require('./routes/licencias');
const ipsRoutes = require('./routes/ips');
const capacidadesRoutes = require('./routes/capacidades');
const historialRoutes = require('./routes/historial');
const agenteRoutes = require('./routes/agente');
const inventarioSoftwareRoutes = require('./routes/inventarioSoftware');

app.use('/api/inventariosoftware', inventarioSoftwareRoutes);



app.use('/api/ips', ipsRoutes);


// Usar rutas con prefijo /api
app.use('/api/dispositivos', dispositivosRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/licencias', licenciasRoutes);
app.use('/api/direcciones_ip', ipsRoutes);
app.use('/api/capacidades', capacidadesRoutes);
app.use('/api/historial', historialRoutes);
app.use('/api/agente', agenteRoutes); // 👈 MONTAJE CORRECTO
app.use('/api/inventario_software', inventarioSoftwareRoutes);


// Probar conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log('✅ Conexión a la base de datos establecida'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Levantar servidor en puerto 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
