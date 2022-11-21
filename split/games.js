const router = require('express').Router();
const Game = require('../models/game');

//obtener estudiantes
router.get( '/' ,(request,response) => {

    //const game = request.body;
    
    Game.find({})
    .then(result =>{
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })

});

module.exports = router;