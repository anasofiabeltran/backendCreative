require('./mongo');

const express = require('express');
const cors = require('cors');
const User = require('./models/User')

const app = express();

app.use(cors());
app.use(express.json());

/*
let users = [
    {
        "id":1,
        "tipo":"estudiante",
        "usuario":"ana",
        "constrasena":"1234",
    },
    {
        "id":2,
        "tipo":"estudiante",
        "usuario":"dani",
        "constrasena":"1234",
    },
    {
        "id":3,
        "tipo":"estudiante",
        "usuario":"carmen",
        "constrasena":"1234",
    },
] 

*/

let users = [] 

app.get('/',(request,response) => {
    response.send('<h1>hello world </h1>');
});

app.get('/api/notes',(request,response) => {
    User.find({})
    .then(result =>{
        response.json(result);
    })
    .catch(err =>{
        console.error(err);
    })
    
});

app.get('/api/notes/:id',(request,response) => {
    const id = request.params.id;
    const user = users.find( u => u.id == id);
    response.json(user);
});

app.post('/api/notes' , (request, response) =>{
    const user = request.body;
    const ids = '0';
    /*
    const newUser = {
        id: ids+1,
        tipo:"estudiante",
        usuario:user.nombre,
        contrasena:user.contrasena,
    }
    */
    //users = [...users, newUser];

    
    const newUserBD = new User({
        id: ids+1,
        tipo: 'estudiante',
        contrasena:'1234',
        usuario:user.nombre,
        
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

const PORT = 3001;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})