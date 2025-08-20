const asyncError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");

exports.agregarCliente = asyncError(async (req, res, next) => {
    const    { rfc, nombre, apellido, email, empresa, telefono } = req.body;

    const clienteCreado = clienteNuevo;
    res.status(201).json({
        status: 'success',
        data: {
            cliente: {
                nombre:nombre,
                apellido:apellido,
                email:email,
                empresa
            }
        }
    });
});

exports.obtenerClientes = asyncError(async (req, res, next) => {
    const clientes = [
        { rfc: "OOHJ020110UU4", nombre: 'Cliente 1', apellido: 'Apellido 1', email: 'cliente1@example.com', empresa: 'Empresa 1', telefono: '123456789' },
        { rfc: "OOHJ020110UU3", nombre: 'Cliente 2', apellido: 'Apellido 2', email: 'cliente2@example.com', empresa: 'Empresa 2', telefono: '987654321' }
    ];
    res.status(200).json({
        status: 'success',
        data: {
            clientes: clientes
        }
    });
});

exports.eliminarCliente = asyncError(async (req, res, next) => {
    const clienteRFC = req.params.id;

    if (clienteRFC !== 'OOHJ020110UU4') {
        const error = new CustomeError('No se encontró el cliente', 404);
        return next(error);
    }

    const cliente = {
        rfc: clienteRFC,
        nombre: 'Cliente 1',
        apellido: 'Apellido 1',
        email: 'cliente1@example.com',
        empresa: 'Empresa 1',
        telefono: '123456789'
    };

    res.status(200).json({
        status: 'success',
        data: {
            cliente: cliente
        }
    });
});

exports.actualizarCliente = asyncError(async (req, res, next) => {
    const clienteRFC = req.params.id;
    const clienteActualizado = req.body;

    if (clienteRFC !== 'OOHJ020110UU4') {
        const error = new CustomeError('No se encontró el cliente', 404);
        return next(error);
    }

    const cliente = {
        rfc: clienteRFC,
        nombre: 'Cliente 1',
        apellido: 'Apellido 1',
        email: 'cliente1@example.com',
        empresa: 'Empresa 1',
        telefono: '123456789'
    };

    const clienteActualizadoFinal = cliente;

    res.status(200).json({
        status: 'success',
        data: {
            cliente: clienteActualizadoFinal
        }
    });
});

exports.obtenerClientePorId = asyncError(async (req, res, next) => {
    const clienteRFC = req.params.id;

    if (clienteRFC !== 'OOHJ020110UU4') {
        const error = new CustomeError('No se encontró el cliente', 404);
        return next(error);
    }

    const cliente = {
        id: clienteRFC,
        nombre: 'Cliente 1',
        apellido: 'Apellido 1',
        email: 'cliente1@example.com',
        empresa: 'Empresa 1',
        telefono: '123456789'
    };

    res.status(200).json({
        status: 'success',
        data: {
            cliente: cliente
        }
    });
});
