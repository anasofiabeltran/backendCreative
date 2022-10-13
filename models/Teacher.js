const mongoose = require('mongoose');

const userTeacher = new mongoose.Schema({
    tipo: String,
    nombre: String,
    celular: Number,
    institucion: String,
    apellido: String,
    correo: String,
    cargo: String,
    contrasena: String,
    cedula: Number
});

const Teacher = mongoose.model('Teacher', userTeacher);

module.exports = Teacher;
