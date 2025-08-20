const asyncError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");

exports.agregarMensaje = asyncError(async (req, res, next) => {

    const { fecha, asunto, cuerpo, archivo, idempleado, idcliente } = req.body;
    const mensaje = {
      idmensaje: 1,
      fecha: fecha,
      asunto: asunto,
      cuerpo: cuerpo,
      archivo: archivo,
      idempleado: idempleado,
      idcliente: idcliente
    };
    res.status(201).json({
      status: 'success',
      data: {
        mensaje: mensaje
      }
    });
});

exports.obtenerMensajes = asyncError(async (req, res, next) => {
  const mensajes = [
    { idmensaje: 1, fecha: '2023-06-26', asunto: 'Mensaje 1', cuerpo: 'Contenido del mensaje 1', archivo: null, idempleado: 1, idcliente: 1 },
    { idmensaje: 2, fecha: '2023-06-25', asunto: 'Mensaje 2', cuerpo: 'Contenido del mensaje 2', archivo: null, idempleado: 2, idcliente: 2 }
  ];
  res.status(200).json({
    status: 'success',
    data: {
      mensajes: mensajes
    }
  });
});

exports.eliminarMensaje = asyncError(async (req, res, next) => {
  const mensajeId = req.params.idmensaje;

  if (mensajeId !== '1') {
    const error = new CustomeError('No se encontró el mensaje', 404);
    return next(error);
  }

  const mensaje = {
    idmensaje: mensajeId,
    fecha: '2023-06-26',
    asunto: 'Mensaje 1',
    cuerpo: 'Contenido del mensaje 1',
    archivo: null,
    idempleado: 1,
    idcliente: 1
  };

  res.status(200).json({
    status: 'success',
    data: {
      mensaje: mensaje
    }
  });
});

exports.actualizarMensaje = asyncError(async (req, res, next) => {
  const mensajeId = req.params.idmensaje;
  const mensajeActualizado = req.body;

  if (mensajeId !== 'MSG001') {
    const error = new CustomeError('No se encontró el mensaje', 404);
    return next(error);
  }

  const mensaje = {
    idmensaje: mensajeId,
    fecha: '2023-06-26',
    asunto: 'Mensaje 1',
    cuerpo: 'Contenido del mensaje 1',
    archivo: null,
    idempleado: 1,
    idcliente: 1
  };

  const mensajeActualizadoFinal = mensaje;

  res.status(200).json({
    status: 'success',
    data: {
      mensaje: mensajeActualizadoFinal
    }
  });
});

exports.obtenerMensajePorId = asyncError(async (req, res, next) => {
  const mensajeId = req.params.idmensaje;

  if (mensajeId !== 'MSG001') {
    const error = new CustomeError('No se encontró el mensaje', 404);
    return next(error);
  }

  const mensaje = {
    idmensaje: mensajeId,
    fecha: '2023-06-26',
    asunto: 'Mensaje 1',
    cuerpo: 'Contenido del mensaje 1',
    archivo: null,
    idempleado: 1,
    idcliente: 1
  };

  res.status(200).json({
    status: 'success',
    data: {
      mensaje: mensaje
    }
  });
});
