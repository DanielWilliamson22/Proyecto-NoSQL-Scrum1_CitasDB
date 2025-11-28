const mongoose = require('mongoose');

const SedeSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la sede es obligatorio'],
        trim: true,
        minlength: 3
    },
    direccion: {
        type: String,
        required: [true, 'La dirección es obligatoria'],
        trim: true
    },
    telefono: {
        type: String,
        default: 'Sin teléfono'
    },
    ciudad: {
        type: String,
        required: true,
        trim: true
    },
    creadoEn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Sede', SedeSchema);
