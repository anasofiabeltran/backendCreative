const router = require('express').Router();
const Teacher = require('../models/Teacher');

//registrar estudiantes
router.post('/' , (request, response) =>{
    const teacher = request.body;

    const newUserBD = new Teacher({
        tipo: 'profesor',
        nombre:teacher.nombre,
        celular:teacher.celular,
        institucion: teacher.institucion,
        apellido: teacher.apellido,
        correo: teacher.correo,
        cargo: teacher.cargo,
        contrasena: teacher.contrasena,
        cedula: teacher.cedula
        
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