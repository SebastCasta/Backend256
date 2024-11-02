const mongoose = require("mongoose");

const productosSchema = mongoose.Schema({

    referencia: {
        type: String,
        required: true
    },
    fabricante: {
        type: String,
        required: true
    },
    capacidad: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    cantidad_disponible: {
        type: Number,
        required: true
    },

}, { versionkey: false });

module.exports = mongoose.model("Productos", productosSchema);