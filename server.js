require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares (Para que el servidor entienda JSON)
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('🔥 Conectado a MongoDB: citasDB'))
    .catch((err) => console.error('❌ Error conectando a Mongo:', err));

// Ruta de prueba (para ver si funciona en el navegador)
app.get('/', (req, res) => {
    res.send('API de Citas funcionando correctamente 🚀');
});

// Arrancar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
