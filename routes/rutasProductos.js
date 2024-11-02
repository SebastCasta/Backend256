const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

router.post("/", productosController.agregarProducto);
router.get("/", productosController.buscarProductos);
router.get("/:id", productosController.mostrarProducto);
router.put("/:id", productosController.actualizarProducto);
router.delete("/:id", productosController.eliminarProducto);

module.exports = router;