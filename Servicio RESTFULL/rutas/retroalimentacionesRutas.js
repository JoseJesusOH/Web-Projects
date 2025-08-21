const express = require('express');
const servicioRetroalimentaciones = require('../servicios/servicioRetroalimentaciones');

const router = express.Router();


router
.route('/')
.get(servicioRetroalimentaciones.obtenerRetroalimentaciones)



module.exports = router;
