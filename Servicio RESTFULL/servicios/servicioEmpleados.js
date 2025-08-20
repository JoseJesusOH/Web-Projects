const asyncError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");

exports.agregarEmpleado = asyncError(async (req, res, next) => {
  const {nombre, apellido, email, rol, telefono } = req.body;
  const empleado = {
    idempleado: 1,
    nombre: nombre,
    apellido: apellido,
    email: email,
    rol: rol,
    telefono: telefono
  };
  res.status(201).json({
    status: 'success',
    data: {
      empleado: empleado
    }
  });
});
