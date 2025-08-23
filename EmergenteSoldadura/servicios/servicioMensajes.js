const controlMensajes = require('../controles/controlMensajes');
const asyncError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");

exports.agregarMensaje = asyncError(async (req, res, next) => {
  const result = await controlMensajes.agregarMensaje(req.body);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al agregar un mensaje', 400);
    return next(error);
  } else {
    const { fecha, asunto, cuerpo, archivo, idempleado, idcliente } = req.body;
    res.status(201).json({
      status: 'success',
      data: {
        mensaje: {
          idmensaje: result.idmensaje,
          fecha: fecha,
          asunto: asunto,
          cuerpo: cuerpo,
          archivo: archivo,
          idempleado: idempleado,
          idcliente: idcliente
        }
      }
    });
  }
});
