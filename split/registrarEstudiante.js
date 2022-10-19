const router = require('express').Router();
const Student = require('../models/Student');

//registrar estudiantes
router.post('/' , (request, response) =>{
    const user = request.body;

    const newUserBD = new Student({
        tipo: 'estudiante',
        nombre:user.nombre,
        celular:user.celular,
        institucion: user.institucion,
        apellido: user.apellido,
        correo: user.correo,
        correoAcudiente: user.correoAcudiente,
        contrasena: user.contrasena,
        targetaId: user.targetaId
        
    })

    newUserBD.save()
    .then(result =>{
        console.log(result);
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })

});

module.exports = router;