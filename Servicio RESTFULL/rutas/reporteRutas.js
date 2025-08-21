const express = require('express');
const servicioReportes = require('../servicios/servicioReportes');

const router = express.Router();


router
.route('/')
.get(servicioReportes.obtenerReportes)




module.exports = router;
