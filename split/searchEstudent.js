const router = require('express').Router();
const Student = require('../models/Student');

//obtener estudiantes
router.get( '/:id' ,(request,response) => {
    const id = request.params;
    Student.findOne({"targetaId": parseInt(id.id)})
    .then(result =>{
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })
    
});

module.exports = router;
