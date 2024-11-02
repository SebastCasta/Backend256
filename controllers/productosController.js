const Productos = require("../models/Productos")

// Funcion agregar producto
exports.agregarProducto = async (req, res) => {
   try {
      let productos = new Productos(req.body);
      await productos.save();
      res.json(productos);

   } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al agregar el producto");
   }
}

// Funcion buscar productos
exports.buscarProductos = async (req, res) => {
   try {
      const productos = await Productos.find();
      res.json((productos)); //ese doble paréntesis es para mostrar que datos está devolviendo
   } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al mostrar los productos");
   }
}

// Funcion buscar un solo producto
exports.mostrarProducto = async (req, res) => {
   try {
      let productos = await Productos.findById(req.params.id);
      if (!productos) {
         res.status(404).send({ msg: "Producto no encontrado con ese ID" });
      } else {
         res.json(productos);
      }
   } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al mostrar el Producto");
   }
}

// Funcion modificar producto
exports.actualizarProducto = async (req, res) => {
   try {
      const productos = await Productos.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      if (!productos) {
         res.status(404).send({ msg: "Producto no encontrado con ese ID" });
      } else {
         res.json(productos);
      }
   } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al modificar el producto");
   }
}

// Funcion eliminar producto 
exports.eliminarProducto = async (req, res) => {
   try {
      const productos = await Productos.findById(req.params.id);
      if (!productos) {
         res.status(404).send({ msg: "Producto no encontrado con ese ID" });
      } else {
         await Productos.findOneAndDelete({_id: req.params.id});
         res.json({msg: "Producto eliminado"});
      }
   } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al eliminar el producto");
   }
}