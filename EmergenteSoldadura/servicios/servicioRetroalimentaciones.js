const controlRetroalimentaciones = require('../controles/controlRetroalimentaciones');
const asyncError = require("../utilidades/asyncError");
const CustomError = require("../utilidades/customeError");

exports.agregarRetroalimentacion = asyncError(async (req, res, next) => {
  const result = await controlRetroalimentaciones.agregarRetroalimentacion(req.body);
  if (typeof result === 'string') {
    const error = new CustomError('Error al agregar una retroalimentación', 400);
    return next(error);
  } else {
    const { comentario, fecha, calificacion, idempleado, idcliente } = req.body;
    res.status(201).json({
      status: 'success',
      data: {
        retroalimentacion: {
          idretroalimentacion: result.idretroalimentacion,
          comentario: comentario,
          fecha: fecha,
          calificacion: calificacion,
          idempleado: idempleado,
          idcliente: idcliente
        }
      }
    });
  }
});

exports.obtenerRetroalimentaciones = asyncError(async (req, res, next) => {
  const result = await controlRetroalimentaciones.obtenerRetroalimentaciones();
  if (typeof result === 'string') {
    const error = new CustomError('No se encontraron retroalimentaciones', 404);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        retroalimentaciones: result
      }
    });
  }
});
