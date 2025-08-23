const controlEmpleados = require('../controles/controlEmpleados');
const asyncError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");

exports.agregarEmpleado = asyncError(async (req, res, next) => {
  const result = await controlEmpleados.agregarEmpleado(req.body);
  if (typeof result === 'string') {
    const error = new CustomeError('Error al agregar un empleado', 400);
    return next(error);
  } else {
    const { nombre, apellido, email, rol, telefono } = req.body;
    res.status(201).json({
      status: 'success',
      data: {
        empleado: {
          idempleado: result,
          nombre: nombre,
          apellido: apellido,
          email: email,
          rol: rol,
          telefono: telefono
        }
      }
    });
  }
});

exports.obtenerEmpleados = asyncError(async (req, res, next) => {
  const result = await controlEmpleados.obtenerEmpleados();
  if (typeof result === 'string') {
    const error = new CustomeError('No se encontraron empleados', 404);
    return next(error);
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        empleados: result
      }
    });
  }
});
