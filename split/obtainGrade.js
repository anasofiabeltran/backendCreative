const router = require('express').Router();
const Grade = require('../models/ExamGrade');

//obtener estudiantes
router.post( '/' ,(request,response) => {

    const grade = request.body;
    
    Grade.find({"responder": grade.responder})
    .then(result =>{
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })

});

module.exports = router;