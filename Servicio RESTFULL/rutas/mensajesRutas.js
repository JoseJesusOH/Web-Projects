const express = require('express');
const servicioMensajes = require('../servicios/servicioMensajes');

const router = express.Router();


router
.route('/')
.get(servicioMensajes.obtenerMensajes)
.post(servicioMensajes.agregarMensaje)


module.exports = router;
