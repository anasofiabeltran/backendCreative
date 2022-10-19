const router = require('express').Router();
const Game = require('../models/game');

//obtener estudiantes
router.post( '/' ,(request,response) => {

    const game = request.body;
    
    Game.findOne({"nombre": game.gameName})
    .then(result =>{
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })

});

module.exports = router;