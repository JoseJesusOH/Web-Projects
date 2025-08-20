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
