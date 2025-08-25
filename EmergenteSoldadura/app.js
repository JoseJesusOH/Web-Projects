
const express = require('express');
const port = 3000;
const usuariosRutas = require("./rutas/usuarioRutas");
const empleadosRutas = require("./rutas/empleadoRutas");
const clientesRutas = require("./rutas/clienteRutas");
const mensajesRutas = require("./rutas/mensajesRutas");
const reportesRutas = require("./rutas/reporteRutas");
const retroalimentacionesRutas = require("./rutas/retroalimentacionesRutas");
const CustomeError = require("./utilidades/customeError");
const errorController = require("./utilidades/errrorController")
const jwtController = require("./utilidades/jwtController");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const validarDatos = (req, res, next) => {
  const { body, originalUrl, method } = req;
  console.log(body);
  if (
    (method === 'POST' &&
      (
        (originalUrl === '/mensajes' && (!body.fecha || !body.asunto || !body.cuerpo  )) ||
        (originalUrl === '/usuarios' && (!body.usuario || !body.contrasena || !body.idempleado)) ||
        (originalUrl === '/reportes' && (!body.descripcion || !body.fecha || !body.hora )) ||
        (originalUrl === '/retroalimentaciones' && (!body.comentario || !body.fecha || !body.calificacion )) ||
        (originalUrl === '/clientes' && (!body.rfc || !body.nombre || !body.apellido || !body.email || !body.empresa || !body.telefono)) ||
        (originalUrl === '/empleados' && (!body.nombre || !body.apellido || !body.email || !body.rol || !body.telefono))
      )
    ) ||
    (method === 'PUT' &&
      (
        (originalUrl === '/usuarios' && (!body.usuario || !body.contrasena || !body.idempleado)) ||
        (originalUrl === '/clientes' && (!body.rfc || !body.nombre || !body.apellido || !body.email || !body.empresa || !body.telefono)) ||
        (originalUrl === '/empleados' && (!body.idempleado || !body.nombre || !body.apellido || !body.email || !body.rol || !body.telefono))
      )
    )
  ) {
    const error = new CustomeError('Faltan campos obligatorios en la solicitud', 400);
    return next(error);
  }

  next();
};


const jwtMiddleware = async (req, res, next) => {
  const { body, originalUrl, method } = req;

    const token = req.headers.authorization;
    const secreto = 'osos-carinosos';

    try {
      await jwtController.verifyToken(token, secreto);
      next();
    } catch (error) {
      const customeError = new CustomeError('Token inválido, no ha iniciado sesión.', 401);
      next(customeError);
    }
};


app.use('/usuarios',validarDatos, usuariosRutas);
app.use('/empleados', jwtMiddleware, validarDatos, empleadosRutas);
app.use('/clientes', jwtMiddleware, validarDatos, clientesRutas);
app.use('/mensajes', jwtMiddleware, validarDatos, mensajesRutas);
app.use('/reportes', jwtMiddleware, validarDatos, reportesRutas);
app.use('/retroalimentaciones', jwtMiddleware, validarDatos, retroalimentacionesRutas);

app.all("*", (req, res, next) => {
  const err = new CustomError("Cannot find " + req.originalUrl + " on the server", 404);
  next(err);
});

app.use(errorController);

app.listen(port, () => {
  console.log(`Aplicación corriendo en el puerto ${port}`);
});
