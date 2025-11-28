require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db'); // <-- Importamos tu nueva config
const sedeRoutes = require('./src/routes/sedeRoutes');

const app = express();

// 1. Conectar a MongoDB (Usando el archivo limpio)
connectDB();

// 2. Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// 3. Rutas
app.get('/', (req, res) => {
    res.send('API de Citas funcionando correctamente 🚀');
});

app.use('/api/sedes', sedeRoutes);

// 4. Arrancar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
