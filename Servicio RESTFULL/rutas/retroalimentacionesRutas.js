const express = require('express');
const servicioRetroalimentaciones = require('../servicios/servicioRetroalimentaciones');

const router = express.Router();


router
.route('/')
.get(servicioRetroalimentaciones.obtenerRetroalimentaciones)
.post(servicioRetroalimentaciones.agregarRetroalimentacion)



module.exports = router;
