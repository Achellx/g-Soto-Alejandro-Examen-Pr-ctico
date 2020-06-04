let mongoose = require('mongoose');

//Unir al modelo
let Pintores = require('../models/Pintores');

let pintoresController = {};

/*FIND*/
pintoresController.list = (req, res)=>{
    Pintores.find({})
    .limit(20)
    .skip(0)
    .exec((err, pintor)=>{
        if(err){
            console.log('Error: ', err);
        }
        res.render('../views/index',{
            pintores: pintor,
            titulo: "Listado de pintores",
            year: new Date().getFullYear()
        });
    }) 
};

module.exports = pintoresController;