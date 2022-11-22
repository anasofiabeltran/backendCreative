const mongoose = require('mongoose');

const game = new mongoose.Schema({
    nombre: String,
    creator: String,
    cantidadPreguntas: Number,
    preguntas: Object
});


const Game = mongoose.model('Game', game);

module.exports = Game;