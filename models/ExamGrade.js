const mongoose = require('mongoose');

const examGrade = new mongoose.Schema({
    grade: Number,
    creator: String,
    responder: String,
    test: String
})



const ExamGrade = mongoose.model('ExamGrade', examGrade);


module.exports = ExamGrade;