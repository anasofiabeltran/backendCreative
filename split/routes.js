const router = require('express').Router();

const estudiantesRouter = require('./estudents');
const registrarEstudiantes = require('./registrarEstudiante');
const registrarTeacher = require('./registerTeachers');
const createGame = require('./createGame');
const modifyGame = require('./modifyGame');
const baseRouter = require('./baseRoute');
const obtainGame = require('./obtainGame');

function routerApi(app){
    app.use("/api", router);

    router.use('/estudiantes',estudiantesRouter);
    router.use('/registrarEstudiante',registrarEstudiantes);
    router.use('/registrarProfesor',registrarTeacher);
    router.use('/crearJuego',createGame);
    router.use('/cambiarJuego',modifyGame);
    router.use('/consultarDatosJuego',obtainGame);
    router.use('/', baseRouter);
}

module.exports = routerApi;