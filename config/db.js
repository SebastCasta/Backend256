const mongoose = require("mongoose");
require("dotenv").config();

// conexion con mongo db
const conectarBD = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log("Estamos conectados con mongo"))
    .catch((err) => console.log(err));
}

module.exports = conectarBD;