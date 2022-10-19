const mongoose = require('mongoose');
const  connectionString = `mongodb+srv://creative:creative@cluster0.m5mg0pu.mongodb.net/test`
//conexion a mongodb

mongoose.connect(connectionString)
.then(()=>{
    console.log('Database connected');
}).catch(err =>{
    console.error(err);
})





/*
User.find({})
.then(result =>{
    console.log(result);
    mongoose.connection.close();
})
.catch(err =>{
    console.error(err);
})
*/
/*
const user = new User({
    tipo: 'estudiante',
    usuario: 'lina',
    contrasena: '1234'
})

user.save()
.then(result =>{
    console.log(result);
    mongoose.connection.close();
})
.catch(err =>{
    console.error(err);
})
*/