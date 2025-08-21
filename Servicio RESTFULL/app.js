
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


app.use('/usuarios',usuariosRutas);
app.use('/empleados',empleadosRutas);
app.use('/clientes',clientesRutas);
app.use('/mensajes',  mensajesRutas);
app.use('/reportes', reportesRutas);
app.use('/retroalimentaciones',  retroalimentacionesRutas);


app.all("*", (req, res, next) => {
  const err = new CustomeError("Cannot find " + req.originalUrl + "on the server", 404);
  next(err);
});

app.use(errorController);

app.listen(port, () => {
  console.log(`Aplicación corriendo en el puerto ${port}`);
});


