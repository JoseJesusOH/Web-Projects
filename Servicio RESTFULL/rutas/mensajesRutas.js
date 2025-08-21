const express = require('express');
const servicioMensajes = require('../servicios/servicioMensajes');

const router = express.Router();


router
.route('/')
.get(servicioMensajes.obtenerMensajes)


module.exports = router;
