const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

// Rutas del CRUD
router.post("/", clienteController.agregarClientes);
router.get("/", clienteController.buscarClientes);
router.get("/:id", clienteController.mostrarCliente);
// router.patch("/:id", clienteController.modificarClientes);
router.put("/:id", clienteController.actualizarClientes); //esta modificacion puede hacerse mediante PATCH o PUT
router.delete("/:id", clienteController.eliminarClientes);

module.exports = router;