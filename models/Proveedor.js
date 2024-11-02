const mongoose = require("mongoose");

const proveedorSchema = mongoose.Schema({

    empresa: {
        type: String,
        required: true
    },
    contacto: {
        type: String,
        required: true
    },
    rut: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono_contacto: {
        type: Number,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },

}, { versionkey: false });

module.exports = mongoose.model("Proveedor", proveedorSchema);