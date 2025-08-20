const asyncError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");

exports.agregarReporte = asyncError(async (req, res, next) => {

    const { descripcion, fecha, hora, idempleado, idcliente } = req.body;
    const reporte = {
      idreporte: 1,
      descripcion: descripcion,
      fecha: fecha,
      hora: hora,
      idempleado: idempleado,
      idcliente: idcliente
    };
    res.status(201).json({
      status: 'success',
      data: {
        reporte: reporte
      }
    });
});

exports.obtenerReportes = asyncError(async (req, res, next) => {
  const reportes = [
    { idreporte: 1, descripcion: 'Reporte 1', fecha: '2023-06-26', hora: '12:00', idempleado: 1, idcliente: 1 },
    { idreporte: 2, descripcion: 'Reporte 2', fecha: '2023-06-25', hora: '14:30', idempleado: 2, idcliente: 2 }
  ];
  res.status(200).json({
    status: 'success',
    data: {
      reportes: reportes
    }
  });
});

exports.eliminarReporte = asyncError(async (req, res, next) => {
  const reporteId = req.params.idreporte;

  if (reporteId !== '1') {
    const error = new CustomeError('No se encontró el reporte', 404);
    return next(error);
  }

  const reporte = {
    idreporte: reporteId,
    descripcion: 'Reporte 1',
    fecha: '2023-06-26',
    hora: '12:00',
    idempleado: 1,
    idcliente: 1
  };

  res.status(200).json({
    status: 'success',
    data: {
      reporte: reporte
    }
  });
});

exports.actualizarReporte = asyncError(async (req, res, next) => {
  const reporteId = req.params.idreporte;
  const reporteActualizado = req.body;

  if (reporteId !== 'RP001') {
    const error = new CustomeError('No se encontró el reporte', 404);
    return next(error);
  }

  const reporte = {
    idreporte: reporteId,
    descripcion: 'Reporte 1',
    fecha: '2023-06-26',
    hora: '12:00',
    idempleado: 1,
    idcliente: 1
  };

  const reporteActualizadoFinal = reporte;

  res.status(200).json({
    status: 'success',
    data: {
      reporte: reporteActualizadoFinal
    }
  });
});

exports.obtenerReportePorId = asyncError(async (req, res, next) => {
  const reporteId = req.params.idreporte;

  if (reporteId !== 'RP001') {
    const error = new CustomeError('No se encontró el reporte', 404);
    return next(error);
  }

  const reporte = {
    idreporte: reporteId,
    descripcion: 'Reporte 1',
    fecha: '2023-06-26',
    hora: '12:00',
    idempleado: 1,
    idcliente: 1
  };

  res.status(200).json({
    status: 'success',
    data: {
      reporte: reporte
    }
  });
});
