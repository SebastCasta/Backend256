const express = require("express");
const router = express.Router();
const proveedorController = require("../controllers/proveedorController");

router.post("/", proveedorController.agregarProveedores);
router.get("/", proveedorController.buscarProveedores);
router.get("/:id", proveedorController.mostrarProveedor);
router.put("/:id", proveedorController.actualizarProveedores);
router.delete("/:id", proveedorController.eliminarProveedor);

module.exports = router;