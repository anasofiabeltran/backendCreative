const router = require('express').Router();
const Student = require('../models/Student');

//obtener estudiantes
router.get( '/' ,(request,response) => {
    Student.find({})
    .then(result =>{
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })
    
});

module.exports = router;