
const express = require('express');
const port = 4000;
const mensajeRuta = require("./rutas/mensajeRuta");
const holaMundoRuta = require("./rutas/holaMundoRuta");

const app = express();
app.use(express.json());

app.use('/holamundo', holaMundoRuta);
app.use('/mensaje', mensajeRuta);


app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

app.listen(port, () => {
    console.log(`Aplicación corriendo en el puerto ${port}`);
});
