const router = require('express').Router();
const Teacher = require('../models/Teacher');

//obtener estudiantes
router.get( '/:id/:contrasena' ,(request,response) => {
    const usuario = request.params;
    Teacher.findOne({"cedula": parseInt(usuario.id)})
    .then(result =>{
        response.json(result.contrasena==usuario.contrasena);
    })
    .catch(err =>{
        console.error(err);
    })
    
});

module.exports = router;
