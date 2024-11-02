const express = require("express");
const conectarBD = require("../config/db");
const cors = require("cors");

// Creamos la variable express
const app = express();
const port = process.env.PORT || 5000;

// Conexión bases de datos
conectarBD();
app.use(cors());
app.use(express.json());

// Ruta para consumir la api cliente
app.use("/api/clientes", require("../routes/rutasCliente"));

// Ruta para consumir la api proveedores
app.use("/api/proveedores", require("../routes/rutasProveedores"));

// Ruta para consumir la api productos
app.use("/api/productos", require("../routes/rutasProductos"))

// Ruta para verificar nuestro servidor en la web
app.get("/", (req, res) => {
    res.send("Hola estamos conectados desde la web")
});

// Ruta de nuestro servidor
app.listen(port, () => {
    console.log("El servidor esta conectado http://localhost:5000");
});