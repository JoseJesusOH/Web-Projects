const express = require('express');
const servicioClientes = require('../servicios/servicioClientes');

const router = express.Router();


router
.route('/')
.get(servicioClientes.obtenerClientes)
.post(servicioClientes.agregarCliente)



module.exports = router;
