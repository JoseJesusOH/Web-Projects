

const express = require('express');

const router = express.Router();
router
    .route('/')
    .post((req, res) => {
        const mensaje = req.body.mensaje;
        res.send(`Cuerpo de Mensaje : ${mensaje}`);
    })

module.exports = router;