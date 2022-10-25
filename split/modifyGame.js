const router = require('express').Router();
const Game = require('../models/game');

//crear juego
router.put('/crearPregunta/:nameGame',(request,response) => {
    const {nameGame} = request.params;
    const {question} = request.body;
    Game.updateOne(
    {
        "nombre": nameGame
    },{
        $push:{
            "preguntas": question
        }
    }
    )
    .then(
       response.json("se ha actualizado")
    )
    .catch(err =>{
        console.error(err);
    })
    
});

module.exports = router;