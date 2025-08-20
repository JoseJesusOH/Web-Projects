const asyncError = require("../utilidades/asyncError");
const CustomError = require("../utilidades/customeError");

exports.agregarUsuario = asyncError(async (req, res, next) => {
  const { usuario, contrasena, idempleado } = req.body;
  const usuarioNuevo = {
    usuario: usuario,
    contrasena: contrasena,
    idempleado: idempleado
  };
  res.status(201).json({
    status: 'success',
    data: {
      usuario: usuarioNuevo
    }
  });
});

exports.obtenerUsuarios = asyncError(async (req, res, next) => {
  const usuarios = [
    { usuario: 'usuario1', contrasena: 'contrasena1', idempleado: 1 },
    { usuario: 'usuario2', contrasena: 'contrasena2', idempleado: 2 }
  ];
  res.status(200).json({
    status: 'success',
    data: {
      usuarios: usuarios
    }
  });
});

exports.eliminarUsuario = asyncError(async (req, res, next) => {
  const usuarioId = req.params.usuario;

  if (usuarioId !== 'usuario1') {
    const error = new CustomError('No se encontró el usuario', 404);
    return next(error);
  }

  const usuarioEliminado = {
    usuario: usuarioId,
    contrasena: 'contrasena1',
    idempleado: 1
  };

  res.status(200).json({
    status: 'success',
    data: {
      usuario: usuarioEliminado
    }
  });
});
