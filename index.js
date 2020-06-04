const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

//Puerto
const PUERTO = process.env.PORT || 3000;

//Rutas
let pintoresRouter = require('./routes/pintor');

//Express y HBS
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname + '/public'));

app.use('/', pintoresRouter);

//Conexión con MongoDB
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://Achell:AlexyMich@examen-practico-4g-r2q4w.mongodb.net/Examen?retryWrites=true&w=majority'
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Conexión establecida <3');
    })
    .catch(err=> console.log(err)); 

//Conexión al servidor web
app.listen(PUERTO,()=>{
    console.log('Escuchando el puerto...');
});