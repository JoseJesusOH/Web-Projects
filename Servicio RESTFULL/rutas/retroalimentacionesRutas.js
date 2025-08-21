const express = require('express');
const servicioRetroalimentaciones = require('../servicios/servicioRetroalimentaciones');

const router = express.Router();


router
.route('/')
.get(servicioRetroalimentaciones.obtenerRetroalimentaciones)
.post(servicioRetroalimentaciones.agregarRetroalimentacion)

router
.route('/:id')
.get(servicioRetroalimentaciones.obtenerRetroalimentacionPorId)



module.exports = router;
