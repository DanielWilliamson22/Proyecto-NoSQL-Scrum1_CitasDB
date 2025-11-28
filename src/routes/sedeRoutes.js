const express = require('express');
const router = express.Router();
const sedeController = require('../controllers/sedeController');

router.post('/', sedeController.crearSede);          // Crear
router.get('/', sedeController.obtenerSedes);        // Ver todas
router.get('/:id', sedeController.obtenerSedePorId); // Ver una
router.put('/:id', sedeController.actualizarSede);   // Editar
router.delete('/:id', sedeController.eliminarSede);  // Borrar

module.exports = router;

