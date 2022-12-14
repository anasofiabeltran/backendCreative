const router = require('express').Router();
const Student = require('../models/Student');

//obtener estudiantes
router.get( '/:id/:contrasena' ,(request,response) => {
    const usuario = request.params;
    Student.findOne({"targetaId": parseInt(usuario.id)})
    .then(result =>{
        response.json(result.contrasena==usuario.contrasena);
    })
    .catch(err =>{
        console.error(err);
    })
    
});

module.exports = router;
