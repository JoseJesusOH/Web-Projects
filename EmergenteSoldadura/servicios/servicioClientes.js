const controlClientes = require('../controles/controlClientes');
const asyncError = require("../utilidades/asyncError");
const CustomeError = require("../utilidades/customeError");

exports.agregarCliente = asyncError(async (req, res, next) => {
    const result = await controlClientes.agregarCliente(req.body);
    if (typeof result === 'string') {
        const error = new CustomeError('Error al agregar un cliente', 400);
        return next(error);
    } else {
        res.status(201).json({
            status: 'success',
            data: {
                clientes: result
            }
        });
    }
});
