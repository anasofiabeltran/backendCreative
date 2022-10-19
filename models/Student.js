const mongoose = require('mongoose');

const userStudent = new mongoose.Schema({
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



const Student = mongoose.model('Student', userStudent);


module.exports = Student;