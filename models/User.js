const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    tipo: String,
    usuario: String,
    contrasena: String
})

const User = mongoose.model('User', userSchema)

module.exports = User