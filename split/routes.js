const router = require('express').Router();

const estudiantesRouter = require('./estudents');
const registrarEstudiantes = require('./registrarEstudiante');
const registrarTeacher = require('./registerTeachers');
const createGame = require('./createGame');
const modifyGame = require('./modifyGame');
const baseRouter = require('./baseRoute');
const obtainGame = require('./obtainGame');
const searchEstudent = require('./searchEstudent');
const searchTeacher = require('./searchTeacher');
const searchGames = require('./games');
const qualify = require('./qualify');

function routerApi(app){
    app.use("/api", router);

    router.use('/estudiantes',estudiantesRouter);
    router.use('/registrarEstudiante',registrarEstudiantes);
    router.use('/registrarProfesor',registrarTeacher);
    router.use('/crearJuego',createGame);
    router.use('/cambiarJuego',modifyGame);
    router.use('/consultarDatosJuego',obtainGame);
    router.use('/consultarDatosEstudiante',searchEstudent);
    router.use('/loginDocente',searchTeacher);
    router.use('/juegos',searchGames);
    router.use('/calificar',qualify);
    router.use('/', baseRouter);
}

module.exports = routerApi;