const express = require('express');
const servicioEmpleados = require('../servicios/servicioEmpleados');

const router = express.Router();


router
.route('/')
.get(servicioEmpleados.obtenerEmpleados)
.post(servicioEmpleados.agregarEmpleado)




module.exports = router;
