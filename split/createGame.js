const router = require('express').Router();
const Game = require('../models/game');

//crear juego
router.post('/' , (request, response) =>{
    const game = request.body;
  
    const newgameBD = new Game({

        nombre: game.nombre,
        creator: game.creator,
        cantidadPreguntas: game.numPreguntas,
        preguntas: game.preguntas
        
    })

    newgameBD.save()
    .then(result =>{
        console.log(result);
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })

});

module.exports = router;