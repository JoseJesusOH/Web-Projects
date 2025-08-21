
const express = require('express');
const port = 5000;
const usuariosRutas = require("./rutas/usuarioRutas");
const empleadosRutas = require("./rutas/empleadoRutas");
const clientesRutas = require("./rutas/clienteRutas");
const mensajesRutas = require("./rutas/mensajesRutas");
const reportesRutas = require("./rutas/reporteRutas");
const retroalimentacionesRutas = require("./rutas/retroalimentacionesRutas");
const CustomeError = require("./utilidades/customeError");
const errorController = require("./utilidades/errrorController")
const app = express();
app.use(express.json());
