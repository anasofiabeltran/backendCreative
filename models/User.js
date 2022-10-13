const mongoose = require('mongoose');

const userEstudent = new mongoose.Schema({
    tipo: String,
    nombre: String,
    celular: Number,
    institucion: String,
    apellido: String,
    correo: String,
    correoAcudiente: String,
    contrasena: String,
    targetaId: Number
})



const User = mongoose.model('User', userEstudent);


module.exports = User;