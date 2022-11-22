const router = require('express').Router();
const Grade = require('../models/ExamGrade');

//crear juego
router.post('/' , (request, response) =>{
    const gradeDetails = request.body;
    const newGrade = new Grade({
        grade: gradeDetails.grade,
        creator: gradeDetails.teacher,
        responder: gradeDetails.student,
        test: gradeDetails.test
    })

    newGrade.save()
    .then(result =>{
        console.log(result);
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })

});

module.exports = router;