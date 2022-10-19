require('./mongo');

const express = require('express');
const cors = require('cors');
const routerApi = require('./split/routes');

const app = express();

app.use(cors());
app.use(express.json());



let users = [] 

/*------------- estudiantes ------------------------------------------- */

routerApi(app);
/*

app.get('/api/notes/:id',(request,response) => {
    const {id} = request.params;
    User.findById(id)
    .then(result =>{
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })
});

app.post('/api/crearUsuarioEstudiante' , (request, response) =>{
    const user = request.body;

    const newUserBD = new User({
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

app.get('/api/actualizarEstudiante/:id',(request,response) => {
    const user = request.body;
    const {id} = request.params;
    User.findById(id)
    .then(result =>{
        result.nombre=user.nombre;
        result.save();
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })
    
});

*/

/*------------- estudiantes ------------------------------------------- */
/*------------- profesores ------------------------------------------- */

/*
app.get('/api/profesores',(request,response) => {
    Teacher.find({})
    .then(result =>{
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })
    
});

app.post('/api/crearUsuarioDocente' , (request, response) =>{
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

*/
/*------------- profesores ------------------------------------------- */
/*-------------------juego--------------------------------------- */

/*

app.get('/api/juegos/:nombreUsuario',(request,response) => {
    const nombreUsuario = request.params;
    Game.find({nombreUsuario})
    .then(result =>{
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })
    
});

app.get('/api/cambiarJuego',(request,response) => {

    const {nombreUsuario,nuevoNombre} = request.body;
    Game.find({nombreUsuario})
    .then(result =>{
        result.find((r)=>{
            if(r.nombre==nombreUsuario){
                r.nombre=nuevoNombre;
                r.save();
            }
        })
        response.json(result[0].nombre);
    })
    .catch(err =>{
        console.error(err);
    })
    
});


app.post('/api/crearJuego' , (request, response) =>{
    const game = request.body;
  
    const newgameBD = new Game({

        nombre: game.nombre,
        cantidadPreguntas: game.numPreguntas,
        compartidoCon: [],
        preguntas: game.preguntas
        
    })

    newgameBD.save()
    .then(result =>{
        console.log(result);
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })

});


*/
/*-------------------juego--------------------------------------- */
const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})