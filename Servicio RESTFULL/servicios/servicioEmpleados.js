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

exports.obtenerEmpleados = asyncError(async (req, res, next) => {
  const empleados = [
    { idempleado: 1, nombre: 'Empleado 1', apellido: 'Apellido 1', email: 'empleado1@example.com', rol: 'Rol 1', telefono: '123456789' },
    { idempleado: 2, nombre: 'Empleado 2', apellido: 'Apellido 2', email: 'empleado2@example.com', rol: 'Rol 2', telefono: '987654321' }
  ];
  res.status(200).json({
    status: 'success',
    data: {
      empleados: empleados
    }
  });
});

exports.eliminarEmpleado = asyncError(async (req, res, next) => {
  const empleadoId = req.params.idempleado;

  if (empleadoId !== '1') {
    const error = new CustomeError('No se encontró el empleado', 404);
    return next(error);
  }

  const empleado = {
    idempleado: empleadoId,
    nombre: 'Empleado 1',
    apellido: 'Apellido 1',
    email: 'empleado1@example.com',
    rol: 'Rol 1',
    telefono: '123456789'
  };

  res.status(200).json({
    status: 'success',
    data: {
      empleado: empleado
    }
  });
});


exports.actualizarEmpleado = asyncError(async (req, res, next) => {
  const empleadoId = req.params.idempleado;
  const empleadoActualizado = req.body;

  if (empleadoId !== 'EMP001') {
    const error = new CustomeError('No se encontró el empleado', 404);
    return next(error);
  }

  const empleado = {
    idempleado: empleadoId,
    nombre: 'Empleado 1',
    apellido: 'Apellido 1',
    email: 'empleado1@example.com',
    rol: 'Rol 1',
    telefono: '123456789'
  };

  const empleadoActualizadoFinal = empleado;

  res.status(200).json({
    status: 'success',
    data: {
      empleado: empleadoActualizadoFinal
    }
  });
});

exports.obtenerEmpleadoPorId = asyncError(async (req, res, next) => {
  const empleadoId = req.params.idempleado;

  if (empleadoId !== 'EMP001') {
    const error = new CustomeError('No se encontró el empleado', 404);
    return next(error);
  }

  const empleado = {
    idempleado: empleadoId,
    nombre: 'Empleado 1',
    apellido: 'Apellido 1',
    email: 'empleado1@example.com',
    rol: 'Rol 1',
    telefono: '123456789'
  };

  res.status(200).json({
    status: 'success',
    data: {
      empleado: empleado
    }
  });
});

