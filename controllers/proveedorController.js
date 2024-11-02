const Proveedor = require("../models/Proveedor")

// Funcion agregar proveedor
exports.agregarProveedores = async (req, res) => {
   try {
      let proveedores;
      proveedores = new Proveedor(req.body);
      await proveedores.save();
      res.json(proveedores);

   } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al agregar el proveedor");
   }
}

// Funcion buscar proveedor
exports.buscarProveedores = async (req, res) => {
   try {
      const proveedores = await Proveedor.find();
      res.json((proveedores)); //ese doble paréntesis es para mostrar que datos está devolviendo
   } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al mostrar los proveedores");
   }
}

// Funcion buscar un solo proveedor
exports.mostrarProveedor = async (req, res) => {
   try {
      let proveedores = await Proveedor.findById(req.params.id);
      if (!proveedores) {
         res.status(404).send({ msg: "Proveedor no encontrado con ese ID" });
      } else {
         res.json(proveedores);
      }
   } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al mostrar un proveedor");
   }
}

// Funcion modificar cliente
exports.actualizarProveedores = async (req, res) => {
   try {
      const proveedores = await Proveedor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      if (!proveedores) {
         res.status(404).send({ msg: "Proveedor no encontrado con ese ID" });
      } else {
         res.json(proveedores);
      }
   } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al modificar un proveedor");
   }
}

// Funcion eliminar proveedor 
exports.eliminarProveedor = async (req, res) => {
   try {
      const proveedores = await Proveedor.findById(req.params.id);
      if (!proveedores) {
         res.status(404).send({ msg: "Proveedor no encontrado con ese ID" });
      } else {
         await Proveedor.findOneAndDelete({_id: req.params.id});
         res.json({msg: "Proveedor eliminado"});
      }
   } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al eliminar un Proveedor");
   }
}