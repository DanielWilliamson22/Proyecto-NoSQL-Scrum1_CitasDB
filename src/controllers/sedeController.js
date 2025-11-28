const Sede = require('../models/sede');

// Crear
exports.crearSede = async (req, res) => {
    try {
        const nuevaSede = new Sede(req.body);
        await nuevaSede.save();
        res.status(201).json(nuevaSede);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener TODAS
exports.obtenerSedes = async (req, res) => {
    try {
        const sedes = await Sede.find();
        res.json(sedes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener sedes' });
    }
};

// Obtener UNA por ID (Nuevo)
exports.obtenerSedePorId = async (req, res) => {
    try {
        const sede = await Sede.findById(req.params.id);
        if (!sede) return res.status(404).json({ error: 'Sede no encontrada' });
        res.json(sede);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar sede' });
    }
};

// Actualizar (Nuevo)
exports.actualizarSede = async (req, res) => {
    try {
        const sedeActualizada = await Sede.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true } // Devuelve el nuevo dato y valida
        );
        if (!sedeActualizada) return res.status(404).json({ error: 'Sede no encontrada' });
        res.json(sedeActualizada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar (Nuevo)
exports.eliminarSede = async (req, res) => {
    try {
        const sedeEliminada = await Sede.findByIdAndDelete(req.params.id);
        if (!sedeEliminada) return res.status(404).json({ error: 'Sede no encontrada' });
        res.json({ message: 'Sede eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar sede' });
    }
};
