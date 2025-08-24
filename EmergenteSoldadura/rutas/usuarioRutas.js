const express = require('express');
const servicioUsuarios = require('../servicios/servicioUsuario');

const router = express.Router();

router.route('/usuario')
  .get(servicioUsuarios.obtenerUsuario);

router.route('/')
  .get(servicioUsuarios.obtenerUsuarios)
  .post(servicioUsuarios.agregarUsuario);



module.exports = router;